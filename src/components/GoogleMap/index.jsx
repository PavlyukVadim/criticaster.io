import React, {PropTypes} from 'react';
import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';
import './GoogleMap.scss';
const MY_API_KEY = 'AIzaSyAuMv8p8jkHcCBsqmZ8HjUwzsmDaaLhq2U';

const styles = [{
    featureType: 'all',
    stylers: [{ saturation: -80, }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
        hue: '#00ffee' },
      { saturation: 50, },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off' },
    ],
  },
];

const Map = ({googleMaps}) => (
  <div className='googleMap'>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={
        [{
            title: 'Toulouse',
            position: {
              lat: 50.448080,
              lng: 30.451475,
            },
            onLoaded: (googleMaps, map, marker) => {
              marker.setAnimation(googleMaps.Animation.DROP)
            },
          }
        ]
      }
      center={{lat: 50.448080, lng: 30.451475}}
      zoom={12}
      onLoaded={(googleMaps, map) => {
        map.setOptions({styles: styles});
      }}
    />
  </div>
)
  
export default GoogleMapLoader(Map, {
  libraries: ['places'],
  key: MY_API_KEY,
})
 