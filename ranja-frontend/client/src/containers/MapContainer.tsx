import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { libraries } from '../components/map/Map.settings';
import { Map } from '../components';

const MapContainer = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
    libraries,
  });

  if (loadError) return <div>map loading error </div>;
  if (!isLoaded) return <div>cannot load map</div>;

  return <Map />;
};

export default MapContainer;
