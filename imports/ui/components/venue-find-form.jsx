import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

export default class VenueFindForm extends React.Component{
  constructor(props){
    super(props);
  }

  _onButtonClick(event){
    this.props.handleQuery(ReactDOM.findDOMNode(this.refs.queryText).value);
    ReactDOM.findDOMNode(this.refs.queryText).value = '';
  }

  render(){
  	return <FormGroup>
      <InputGroup>
        <FormControl 
          ref='queryText'
          type='text'
        />
        <InputGroup.Button>
          <Button onClick={this._onButtonClick.bind(this)}>Find</Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  }

};