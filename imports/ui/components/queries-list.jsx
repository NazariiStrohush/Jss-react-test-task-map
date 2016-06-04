import React from 'react';
import { Table } from 'react-bootstrap';
import QueriesListItem from './queries-list-item.jsx';

export default class QueriesList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Query</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Distance</th>
            <th>Datetime</th>
          </tr>
        </thead>
        <tbody>
          {this.props.queries.map(query => <QueriesListItem key={_ + query._id} {...query}/>)}
        </tbody>
      </Table>
      )
  }
};