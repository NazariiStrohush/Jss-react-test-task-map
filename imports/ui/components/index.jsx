import React from 'react';
import GMap from './google-map';

const markers = [
  {
    lat: 59.8896311, 
    lng: 30.3504685
  }
];

export const Index = () => <div>
  <h3>Venues find</h3>
  <GMap markers={markers}/>
</div>;