import React, { PropTypes, Component } from 'react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

const tooltip = (text, key) => <Tooltip id = {key}><strong>{ text }</strong></Tooltip>;

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