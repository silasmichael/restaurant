import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import zIndex from '@material-ui/core/styles/zIndex';

function GoogleMapComponent() {
    const mapStyles = {        
        height: "25vh",
        width: "75%"};
      
      const defaultCenter = {
        lat: -6.772598, lng: 39.221624
      }
      const item ={
        name: "Chinese Restaurant",
        location: { 
            lat: -6.772598, lng: 39.221624
        }}
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyC9IhRvPd1ceNMUhjQYtPKhM05eMBYTjMQ'>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={17}
            center={defaultCenter}
            >
                <Marker key={item.name} position={item.location}/>
            </GoogleMap>
     </LoadScript>
    )
}

export default GoogleMapComponent
