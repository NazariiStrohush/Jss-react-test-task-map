import React, { PropTypes, Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const tooltip = text => <Tooltip><strong>{ text }</strong></Tooltip>;

export default class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OverlayTrigger placement="top" overlay={ tooltip(this.props.text, this.props.key) }>
         <div style={this.props.style}>
            <img {...this.props.image}></img>
         </div>
      </OverlayTrigger> 
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
    cursor: 'pointer',
    position: 'absolute',
    width: 20,
    height: 20,
    left: -20 / 2,
    top: -20 / 2
  }
}