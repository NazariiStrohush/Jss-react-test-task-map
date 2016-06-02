import React from 'react';
import GMap from './google-map.jsx';
import VenueFindForm from './venue-find-form.jsx';
import 'meteor/underscore';

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
  _setCenter(center){
    this.setState({center});
  }

  _setQuery(query){
    const params = {
      ll: `${this.state.center.lat},${this.state.center.lng}`,
      query,
      limit: 10
    };
    Foursquare.find(params, (error, result) => {
      if(error)
        console.log(error);
      else {
        this.setState({venues: result.response.venues});
        console.log(this.state);
      }
    });
  }

  render(){
    return (<div>
      <h3>Venues find</h3>
      <VenueFindForm handleQuery={this._setQuery.bind(this)} /> 
      <GMap 
        handleCenter={this._setCenter.bind(this)} 
        markers={this.state.venues.map((venue)=>{
          return {
            key: venue.id,
            lat: venue.location.lat, 
            lng: venue.location.lng,
            text: venue.name
          }
        })} />
    </div>);
  }
};