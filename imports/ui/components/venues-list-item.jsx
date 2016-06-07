import React from 'react';

export default class VenuesListItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.location.city}</td>
        <td>{this.props.location.address}</td>
        <td>{this.props.location.lat}</td>
        <td>{this.props.location.lng}</td>
        <td>{this.props.location.distance}</td>
      </tr>
    )
  }
};