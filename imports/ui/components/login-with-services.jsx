import React from 'react';
import { Button } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

class LoginWith extends React.Component{
  constructor(props){
    super(props);
  }

  click(){
    if(!this.props.logged){
      Meteor['loginWith'+this.props.name]({
      requestPermissions: this.props.requestPermissions
    }, (err) => {
      if (err) {
        console.log(err);
      }
    });
    } else {
      Meteor.logout();
    }
  }

  render(){
  	return <div>
      <Button onClick={this.click.bind(this)}>{(this.props.logged ? 'Logout from ' : 'Login with ') + this.props.name}</Button>
    </div>
  }
};

LoginWith.propTypes = {
  requestPermissions: React.PropTypes.array,
  name: React.PropTypes.string.isRequired
}

LoginWith.defaultProps = {
  requestPermissions: ['profile', 'email']
}

export default LoginWithButton = createContainer(() => {
  return {
    logged: !!Meteor.userId() || Meteor.loggingIn(),
  };
}, LoginWith);