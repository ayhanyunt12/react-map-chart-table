/* eslint-disable array-callback-return,react/jsx-closing-tag-location,react/forbid-prop-types */
import React from 'react';
import {compose, withProps} from 'recompose';
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from 'react-google-maps';

/**
 * return Marker object array with selected users coordinates
 * @param users
 */
// eslint-disable-next-line consistent-return
const getMarker = users => users.map(user => {
    if (user.checked) {
        return (<Marker
            key={user.id}
            position={{
                lat: parseFloat(user.address.geo.lat),
                lng: parseFloat(user.address.geo.lng)
            }}
        />);
    }
});

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAerE8NWgLqa8ZXNIChTqofG-uXxn0en0k&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}} />,
        containerElement: <div style={{height: `400px`}} />,
        mapElement: <div style={{height: `100%`}} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    (<GoogleMap
        defaultZoom={1}
        defaultCenter={{lat: -34.397, lng: 150.644}}
    >
        {getMarker(props.users)}
    </GoogleMap>)
);

const MapComponent = (props) => {
    if (!props.userFetched){
        return null;
    }
    return (
        <MyMapComponent users={props.users} />
    )
};


export default MapComponent;