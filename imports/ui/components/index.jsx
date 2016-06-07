import 'meteor/underscore';
import 'meteor/oleh:foursquare';

import { Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { insertQuery } from '/imports/api/queries/methods.js';
import React from 'react';

import GMap from './google-map.jsx';
import VenueFindForm from './venue-find-form.jsx';
import VenuesList from './venues-list.jsx';
import QueriesListContainer from '../containers/queries-list.jsx';
import ExportCsvButton from './export-csv-button.jsx';

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      center: {
        lat: 0,
        lng: 0
      },
      venues: []
    };
  }

  getCurrentCenterLatLng(center){
    this.setState({center});
  }

  clearFindedVenues(){
    this.setState({venues: []});
  }

  findVenues(query){
    const params = {
      ll: `${this.state.center.lat},${this.state.center.lng}`,
      query,
      limit: 10
    };

    Foursquare.find(params, (error, result) => {
      if(error)
        console.log(error);
      else {
        insertQuery.call({
          name: query,
          lat: result.response.venues[0].location.lat,
          lng: result.response.venues[0].location.lng,
          distance: result.response.venues[0].location.distance
        });
        this.setState({venues: result.response.venues});
      }
    });
  }

  render(){
    return (<div>
      <h3>Venues find</h3>
      <QueriesListContainer/>
      <VenueFindForm 
        handleQuery={this.findVenues.bind(this)} 
        clearResults={this.clearFindedVenues.bind(this)}
        /> 
      <GMap 
        handleCenter={this.getCurrentCenterLatLng.bind(this)} 
        markers={this.state.venues.map((venue)=>{
          return {
            key: venue.id,
            lat: venue.location.lat, 
            lng: venue.location.lng,
            text: venue.name
          }
        })} />
      <ExportCsvButton data={this.state.venues}
      />
      <VenuesList venues={this.state.venues}/>
    </div>);
  }
};