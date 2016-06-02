import React from 'react';
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

import 'meteor/oleh:foursquare';

export default class VenueFindForm extends React.Component{
  constructor(props){
    super(props);
  }

  _onChange(event){
  	const query = {
  	  text: event.target.value
  	};
    this.props.handleQuery(query);
  }

  render(){
  	return <FormGroup>
      <InputGroup>
        <FormControl 
          type='text'
          onChange={this._onChange.bind(this)} 
        />
        <InputGroup.Button>
          <Button>Find</Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  }

};