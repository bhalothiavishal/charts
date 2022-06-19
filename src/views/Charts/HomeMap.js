import React, { useState, useMemo, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '350px'
};

function HomeMap({ lat, long, kegid, title }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCnHXmtGqz7eOZg2rW9U20KDit1tRF6rhU"
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: lat, lng: long }}
      zoom={15}
    >
      <Marker position={{ lat: lat, lng: long }} label={kegid} title={title} visible={true} />
    </GoogleMap>
  ) : <></>
}

export default React.memo(HomeMap)