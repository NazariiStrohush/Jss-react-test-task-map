import React, { PropTypes, Component } from 'react';

export default class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div style={this.props.style}>
          <img {...this.props.image}></img>
       </div>
    );
  }
}

Marker.defaultProps = {
  image: {
    src: '/google-maps-marker.png',
    height: '30px',
    width: '18px'
  },
  style: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: -20 / 2,
    top: -20 / 2
  }
}