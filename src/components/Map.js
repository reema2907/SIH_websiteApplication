import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ apiKey, onLocationUpdate }) => {
  const [map, setMap] = useState(null);
  const [userLocationMarker, setUserLocationMarker] = useState(null);

  const handleMapLoad = useCallback((loadedMap) => {
    setMap(loadedMap);
  }, []);

  const handleGetLocation = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          onLocationUpdate(location);
          map.panTo(location);

          if (userLocationMarker) {
            // If userLocationMarker already exists, update its position
            userLocationMarker.setPosition(location);
          } else {
            // If userLocationMarker doesn't exist, create a new Marker
            const marker = new window.google.maps.Marker({
              position: location,
              map,
            });
            setUserLocationMarker(marker);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 28.7041, lng: 77.1025 }} // Default to Delhi's coordinates
        zoom={13}
        onLoad={handleMapLoad}
      >
        {/* Current user location Marker */}
        {userLocationMarker && (
          <Marker position={{ lat: userLocationMarker.position.lat(), lng: userLocationMarker.position.lng() }} />
        )}

        {/* Default Marker (Delhi) */}
        <Marker position={{ lat: 28.7041, lng: 77.1025 }} />
      </GoogleMap>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            backgroundColor: '#008080',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleGetLocation}
        >
          Get My Location
        </button>
      </div>
    </LoadScript>
  );
};

export default Map;
