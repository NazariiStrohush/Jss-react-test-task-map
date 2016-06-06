import React, {propTypes, Component} from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event){
    event.preventDefault();

    const login = ReactDOM.findDOMNode(this.refs.login).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    console.log(login, password);

    Meteor.loginWithPassword(login, password, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        console.log('Success!');
      }

      const location = this.props.location;
      if (location.state && location.state.nextPathname) {
        browserHistory.push(location.state.nextPathname);
      } else {
        browserHistory.push('/');
      }
    });
  }

  render() {
    return (
      <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 } >
        <h4 className="page-header">Login</h4>
        <form ref="loginForm" className="login" onSubmit={ this.handleSubmit.bind(this) }>
          <FormGroup>
            <ControlLabel>Login</ControlLabel>
            <FormControl
              type="text"
              ref="login"
              name="login"
              placeholder="Login"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              <span className="pull-left">Password</span>
            </ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Login</Button>
        </form>
      </Col>
    </Row>
    );
  }
}