import React, {propTypes, Component} from 'react';

import GoogleMap from 'google-map-react';
import Marker from './marker.jsx';

export default class MapPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={this.props.style}>
        <GoogleMap
          bootstrapURLKeys={{
            key: this.props.apiKey
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {this.props.markers.map(function(marker){
            return <Marker key={marker.lat+marker.lng} lat={marker.lat} lng={marker.lng} text={marker.text}/>;
          })}
        </GoogleMap>
      </div>
    );
  }
}

MapPage.defaultProps = {
  markers: [],
  style: {
    width: '250px', 
    height: '250px'
  },
  center: {
    lat: 59.938043, 
    lng: 30.337157
  },
  zoom: 9,
  apiKey: 'AIzaSyDTuCROZWUGNj7BcNQbWNzcIhbG4mqW0D8'
}

MapPage.propTypes = {
  markers: React.PropTypes.array
}