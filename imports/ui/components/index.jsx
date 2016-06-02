import React from 'react';
import GMap from './google-map.jsx';
import VenueFindForm from './venue-find-form.jsx';
const markers = [
  {
    lat: 59.8896311, 
    lng: 30.3504685
  }
];

export class Index extends React.Component{
  constructor(){
    super();
    this.state = {
        center: {
          lat: 0,
          lng: 0
        },
        query: {
          text: ''
        }
    };
  }
  _setCenter(center){
    console.log(center);
    this.setState({center});
  }

  _setQuery(query){
    console.log(query);
    this.setState({query});
  }

  render(){
    return <div>
      <h3>Venues find | center LAT: {this.state.center.lat} LNG: {this.state.center.lng} | Venue: {this.state.query.text}</h3>
      <VenueFindForm handleQuery={this._setQuery.bind(this)}/> 
      <GMap handleCenter={this._setCenter.bind(this)} markers={markers}/>
    </div>;
  }
};