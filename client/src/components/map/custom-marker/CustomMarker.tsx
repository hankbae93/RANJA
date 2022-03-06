import React from 'react';
import { Marker } from '@react-google-maps/api';

interface MarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  onClick: () => void;
  isUser: boolean;
}

const CustomMarker = ({ position, onClick, isUser }: MarkerProps) => {
  const iconOption = {
    url: isUser ? `assets/icons/map_home.svg` : `assets/icons/marker.svg`,
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15),
    scaledSize: new window.google.maps.Size(30, 30),
  };

  return <Marker position={position} onClick={onClick} icon={iconOption} />;
};

export default CustomMarker;
