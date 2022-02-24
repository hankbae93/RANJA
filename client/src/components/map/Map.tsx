import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useAuth from '../../hooks/useAuth';
import { libraries, mapContainerStyle, center, options } from './Map.settings';
import useReduxMap from '../../hooks/useReduxMap';
import { MarkerType } from '../../types';
import CustomInfoWindow from './custom-info-window/CustomInfoWindow';

const Map = () => {
  const user = useAuth();
  const friends = useReduxMap();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
    libraries,
  });
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [selected, setSelected] = useState<MarkerType | null>();
  const mapRef = useRef<google.maps.Map>();

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(() => {
    if (mapRef.current && user?.location) {
      mapRef.current.panTo({ lat: user?.location[0], lng: user?.location[1] });
      mapRef.current.setZoom(18);
    }
  }, [mapRef, user]);

  useEffect(() => {
    if (user?.location) {
      panTo();
    }
  }, [user]);

  useEffect(() => {
    if (friends.length > 0) {
      setMarkers((prev) => {
        const newMarkers = friends.map((friend) => {
          return { lat: friend.location[0], lng: friend.location[1], time: new Date(), ...friend };
        });

        return prev.concat(newMarkers);
      });
    }
  }, [friends]);

  if (loadError) return <div>map loading error </div>;
  if (!isLoaded) return <div>cannot load map</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18} options={options} onLoad={onMapLoad}>
      {markers.map((marker) => (
        <Marker
          key={marker.time.toISOString()}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => {
            setSelected(marker);
          }}
        />
      ))}

      {selected ? (
        <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => setSelected(null)}>
          <CustomInfoWindow data={selected} />
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
