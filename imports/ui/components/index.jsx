import React from 'react';
import GMap from './google-map.jsx';
import VenueFindForm from './venue-find-form.jsx';
import VenuesList from './venues-list.jsx';
import QueriesListContainer from '../containers/queries-list.jsx';
import AccountsUIWrapper from './accounts-ui-wrapper.jsx';
import { insertQuery } from '/imports/api/queries/methods.js';

import 'meteor/underscore';
import 'meteor/oleh:foursquare';

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
  _getCurrentCenterLatLng(center){
    this.setState({center});
  }

  _findVenues(query){
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
      <AccountsUIWrapper />
      <h3>Venues find</h3>
      <QueriesListContainer/>
      <VenueFindForm handleQuery={this._findVenues.bind(this)} /> 
      <GMap 
        handleCenter={this._getCurrentCenterLatLng.bind(this)} 
        markers={this.state.venues.map((venue)=>{
          return {
            key: venue.id,
            lat: venue.location.lat, 
            lng: venue.location.lng,
            text: venue.name
          }
        })} />
      <VenuesList venues={this.state.venues}/>
    </div>);
  }
};