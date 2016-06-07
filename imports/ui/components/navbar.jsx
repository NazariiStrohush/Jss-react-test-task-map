import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import LoginWithButton from './login-with-services.jsx';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Find venues</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LoginWithButton 
          name='Google' 
          style={{bsStyle: 'link'}} 
          onSuccessLogout={() => browserHistory.push('/login')}
          onSuccessLogin={() => browserHistory.push('/')}
          />
      </Nav>
    </Navbar>)
  }
};