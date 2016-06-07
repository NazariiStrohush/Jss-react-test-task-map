import React from 'react';
import { Table, Panel } from 'react-bootstrap';
import VenuesListItem from './venues-list-item.jsx';

export default class VenuesList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {!this.props.venues.length ? <Panel bsStyle='danger'>{'Venues list is empty'}</Panel> : 
          <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Street address</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.venues.map(venue => <VenuesListItem key={_ + venue.id} {...venue}/>)}
          </tbody>
        </Table>
        }
      </div>
      )
  }
};