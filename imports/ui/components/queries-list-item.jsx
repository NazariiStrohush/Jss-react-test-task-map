import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { removeQuery } from '/imports/api/queries/methods.js';

export default class QueriesListItem extends React.Component{
  constructor(props){
    super(props);
  }

  _removeSelf(){
    removeQuery.call({
      _id: this.props._id,
    });
  }

  render(){
    return (
      <tr>
        <td>
          <Button bsStyle="danger" onClick={this._removeSelf.bind(this)}>
            Remove
          </Button>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.lat}</td>
        <td>{this.props.lng}</td>
        <td>{this.props.distance}</td>
        <td>{this.props.date.toString()}</td>
      </tr>
    )
  }
};