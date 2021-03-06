import React, {propTypes, Component} from 'react';

import GoogleMap from 'google-map-react';
import Marker from './marker.jsx';


export default class MapPage extends Component {
  constructor(props) {
    super(props);
  }

  changeMapCenter({center, zoom, bounds, marginBounds}){
    this.props.handleCenter(center);
  }

  render() {
    return (
      <div style={this.props.style}>
        <GoogleMap
          onChange={this.changeMapCenter.bind(this)}
          bootstrapURLKeys={{
            key: this.props.apiKey
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {this.props.markers.map(function(marker){
            return <Marker {...marker}/>;
          })}
        </GoogleMap>
      </div>
    );
  }
}

MapPage.defaultProps = {
  markers: [],
  style: {
    width: '100%', 
    height: '250px'
  },
  center: {
    lat: 35.6895000, 
    lng: 139.6917100
  },
  zoom: 9,
  apiKey: 'AIzaSyDTuCROZWUGNj7BcNQbWNzcIhbG4mqW0D8'
}

MapPage.propTypes = {
  markers: React.PropTypes.array
}