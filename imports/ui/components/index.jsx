import React from 'react';
import GMap from './google-map.jsx';
import VenueFindForm from './venue-find-form.jsx';

const markers = [
  {
    lat: 59.8896311, 
    lng: 30.3504685
  }
];

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        center: {
          lat: 0,
          lng: 0
        }
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
    console.log(params);
    Foursquare.find(params, function(error, result) {
      if(error)
        console.log(error);
      else
        console.log(result);
    });
  }

  render(){
    return (<div>
      <h3>Venues find</h3>
      <VenueFindForm handleQuery={this._setQuery.bind(this)} /> 
      <GMap handleCenter={this._setCenter.bind(this)} markers={markers}/>
    </div>);
  }
};