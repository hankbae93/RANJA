import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleMap } from '@react-google-maps/api';
import { mapContainerStyle, options, center as MapCenter } from './Map.settings';
import useAuth from '../../hooks/useAuth';
import useReduxMap from '../../hooks/useReduxMap';
import { UserInfoType } from '../../types';
import { getAround as getAroundSagaStart } from '../../redux/modules/map';

import CustomInfoWindow from './custom-info-window/CustomInfoWindow';
import CustomMarker from './custom-marker/CustomMarker';

const Map = () => {
  const dispatch = useDispatch();
  const user = useAuth();
  const { aroundUsers, center } = useReduxMap();
  const [selected, setSelected] = useState<UserInfoType | null>();
  const mapRef = useRef<google.maps.Map>();

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onDragEnd = useCallback(() => {
    if (!mapRef.current) return;

    const lat = mapRef.current?.getCenter()?.lat();
    const lng = mapRef.current?.getCenter()?.lng();
    const coords = { lat, lng };
    dispatch(getAroundSagaStart(coords));
  }, [mapRef]);

  const panTo = useCallback(() => {
    if (mapRef.current && user?.location) {
      mapRef.current.panTo({ lat: user.location.coordinates[1], lng: user.location.coordinates[0] });
      mapRef.current.setZoom(18);
      dispatch(getAroundSagaStart({ lat: user.location.coordinates[1], lng: user.location.coordinates[0] }));
    }
  }, [mapRef, user]);

  useEffect(() => {
    if (user?.location) {
      panTo();
    }
  }, [user]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: center.lat, lng: center.lng });
      mapRef.current.setZoom(18);
      dispatch(getAroundSagaStart(center));
    }
  }, [center]);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={MapCenter}
      zoom={18}
      options={options}
      onLoad={onMapLoad}
      onDragEnd={onDragEnd}
    >
      {aroundUsers.map((item) => {
        if (item.username === user?.username) return null;
        const position = { lat: item.location.coordinates[1], lng: item.location.coordinates[0] };

        return (
          <CustomMarker
            key={item.username}
            position={position}
            onClick={() => setSelected(item)}
            isUser={item.username === user?.username}
          />
        );
      })}

      {user && (
        <CustomMarker
          position={{ lat: user.location.coordinates[1], lng: user.location.coordinates[1] }}
          onClick={() => setSelected(user)}
          isUser
        />
      )}

      {selected && (
        <CustomInfoWindow
          data={selected}
          position={{ lat: selected.location.coordinates[1], lng: selected.location.coordinates[0] }}
          onCloseClick={() => setSelected(null)}
        />
      )}
    </GoogleMap>
  );
};

export default Map;
