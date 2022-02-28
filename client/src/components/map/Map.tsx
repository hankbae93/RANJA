import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { libraries, mapContainerStyle, options, center } from './Map.settings';
import useAuth from '../../hooks/useAuth';
import useReduxMap from '../../hooks/useReduxMap';
import { MarkerType, UserInfoType } from '../../types';
import { getAround as getAroundSagaStart } from '../../redux/modules/map';

import CustomInfoWindow from './custom-info-window/CustomInfoWindow';

const Map = () => {
  const dispatch = useDispatch();
  const user = useAuth();
  const { friends, aroundUsers } = useReduxMap();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
    libraries,
  });
  const [markers, setMarkers] = useState<UserInfoType[]>([]);
  const [selected, setSelected] = useState<UserInfoType | null>();
  const mapRef = useRef<google.maps.Map>();

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onCenterChanged = useCallback(() => {
    if (!mapRef.current) return;

    const lat = mapRef.current?.getCenter()?.lat();
    const lng = mapRef.current?.getCenter()?.lng();
    const coords = { lat, lng };
    dispatch(getAroundSagaStart(coords));
  }, [mapRef]);

  const panTo = useCallback(() => {
    if (mapRef.current && user?.location) {
      // mapRef.current.panTo({ lat: user?.location[0], lng: user?.location[1] });
      // mapRef.current.setZoom(18);
    }
  }, [mapRef, user]);

  useEffect(() => {
    if (user?.location) {
      panTo();
    }
  }, [user]);

  // useEffect(() => {
  //   if (friends.length > 0) {
  //     setMarkers((prev) => {
  //       const newMarkers = friends.map((friend, i) => {
  //         return { lat: friend.location[0], lng: friend.location[1], time: new Date(), ...friend };
  //       });

  //       return prev.concat(newMarkers);
  //     });
  //   }
  // }, [friends]);

  if (loadError) return <div>map loading error </div>;
  if (!isLoaded) return <div>cannot load map</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={18}
      options={options}
      onLoad={onMapLoad}
      onCenterChanged={onCenterChanged}
    >
      {aroundUsers.map((user, i) => (
        <Marker
          key={user.username}
          position={{ lat: user.location.coordinates[1], lng: user.location.coordinates[0] }}
          onClick={() => {
            setSelected(user);
          }}
          icon={{
            url: `assets/icons/marker.svg`,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}

      {/* {user && (
        <Marker
          key="user"
          // position={{ lat: user.location[0], lng: user.location[1] }}
          icon={{
            url: `assets/icons/map_home.svg`,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      )} */}

      {selected ? (
        <InfoWindow
          position={{ lat: selected.location.coordinates[1], lng: selected.location.coordinates[0] }}
          onCloseClick={() => setSelected(null)}
        >
          <CustomInfoWindow data={selected} />
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
