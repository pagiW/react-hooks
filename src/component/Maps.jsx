import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Maps = ({ location }) => {
    const style = {
        width: '80vw',
        height: '90vh'
    }
    const centerDefault = {
        lat: location.latitude, lng: location.longitude
    }
    return (
        <LoadScript googleMapsApiKey={process.env.mapId}>
            <GoogleMap
                mapContainerStyle={style}
                zoom={9}
                center={centerDefault}
            >
                <Marker position={centerDefault} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Maps;