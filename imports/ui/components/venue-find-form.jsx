import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

export default class VenueFindForm extends React.Component{
  constructor(props){
    super(props);
  }

  clickFindButton(event){
    this.props.handleQuery(ReactDOM.findDOMNode(this.refs.queryText).value);
    ReactDOM.findDOMNode(this.refs.queryText).value = '';
  }

  clickClearButton(){
    this.props.clearResults();
    ReactDOM.findDOMNode(this.refs.queryText).value = '';
  }

  render(){
  	return <FormGroup>
      <InputGroup>
        <InputGroup.Button>
          <Button bsStyle='warning' onClick={this.clickClearButton.bind(this)}>Clear</Button>
        </InputGroup.Button>
        <FormControl 
          ref='queryText'
          type='text'
        />
        <InputGroup.Button>
          <Button bsStyle='primary' onClick={this.clickFindButton.bind(this)}>Find</Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  }

};