import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useAuth from '../../hooks/useAuth';
import { libraries, mapContainerStyle, center, options } from './Map.settings';

interface MarkerType {
  lat: number;
  lng: number;
  time: Date;
}

const Map = () => {
  const user = useAuth();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
    libraries,
  });
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [selected, setSelected] = useState<MarkerType | null>();
  const mapRef = useRef<google.maps.Map>();

  const onMapClick = useCallback(
    (event: google.maps.MapMouseEvent): void => {
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng?.lat() ?? 0,
          lng: event.latLng?.lng() ?? 0,
          time: new Date(),
        },
      ]);
    },
    [markers],
  );

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

  if (loadError) return <div>map loading error </div>;
  if (!isLoaded) return <div>cannot load map</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={18}
      options={options}
      onLoad={onMapLoad}
      onClick={onMapClick}
    >
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
          <div>
            <h2>응애</h2>
            {/* <p>Spotted {formatRelatvie()}</p> */}
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
