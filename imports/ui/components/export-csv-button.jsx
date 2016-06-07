import React from 'react';
import { Button } from 'react-bootstrap';
import { exportCsv } from '/imports/api/venues/methods.js';
import 'meteor/lfergon:exportcsv';
import 'meteor/underscore';

export default class ExportCsvButton extends React.Component {
  constructor(props){
    super(props);
  }

  buttonClick(){
    let data = this.props.data.map((venue)=>{
      return {
        name: venue.name,
        city: venue.location.city,
        address: venue.location.address,
        latitude: venue.location.lat,
        longitude: venue.location.lng,
        distance: venue.location.distance
      }
    });

    const nameFile = 'findedVenues.csv';
    exportCsv.call({data: data}, (err, fileContent) => {
      if(err){
        console.log(err);
      }
      if(fileContent){
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      }
    });
  }

  render(){
    return <div>
      <Button onClick={this.buttonClick.bind(this)}>Export to CSV</Button>
    </div>
  }
};

ExportCsvButton.defaultProps = {
  data: []
}
