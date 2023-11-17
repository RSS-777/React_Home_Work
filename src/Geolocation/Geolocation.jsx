import React, { useState, useEffect } from 'react';
import './Geolocation.css'
export const UserLocation = () => {
  const [userLocation, setUserLocation] = useState(({ latitude: null, longitude: null }))

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation({ latitude: latitude, longitude: longitude })
      },
      (error) => {
        console.log('Error get location:', error)
      })
  }, [])

  return (
    <section>
      <h3>Geolocation</h3>
      <div className="block-location">
        <h4>This is your geolocation data</h4>
        <div className="lotitude">Latitude: {userLocation.latitude}</div>
        <div className="longitude">Longitude: {userLocation.longitude}</div>
      </div>
    </section>
  )
};


