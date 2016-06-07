import React, {propTypes, Component} from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import LoginWithButton from './login-with-services.jsx';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  loginSuccess(){
    const location = this.props.location;
    if (location.state && location.state.nextPathname) {
      browserHistory.push(location.state.nextPathname);
    } else {
      browserHistory.push('/');
    }
  }

  render() {
    return <div>
    <h1>Please login</h1>
      <LoginWithButton 
        name='Google'
        bsSize='large' 
        onSuccessLogin={this.loginSuccess.bind(this)}
      />
    </div>
  }
}