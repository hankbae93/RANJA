import React from 'react';
import { MarkerContainer } from './Marker.elements';

const Marker = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <MarkerContainer>
      <h2>Marker</h2>
    </MarkerContainer>
  );
};

export default Marker;
