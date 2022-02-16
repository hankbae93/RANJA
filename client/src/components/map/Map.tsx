import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_KEY } from '../../url';

const Map = () => {
  const coords = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{ key: MAP_KEY }} defaultCenter={coords.center} defaultZoom={coords.zoom} />
    </div>
  );
};

export default Map;
