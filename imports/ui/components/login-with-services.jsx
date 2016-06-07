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
          this.props.onErrorLogin(err);
        } else {
          this.props.onSuccessLogin();
        }
      });
    } else {
      Meteor.logout(() => {
        this.props.onSuccessLogout();
      });
    }
  }

  render(){
  	return <div>
      <Button 
        {...this.props.style} 
        onClick={this.click.bind(this)}>{(this.props.logged ? 'Logout from ' : 'Login with ') + this.props.name}
      </Button>
    </div>
  }
};

LoginWith.propTypes = {
  requestPermissions: React.PropTypes.array,
  name: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
  onErrorLogin: React.PropTypes.func,
  onSuccessLogin: React.PropTypes.func,
  onSuccessLogout: React.PropTypes.func
}

LoginWith.defaultProps = {
  requestPermissions: ['profile', 'email'],
  onErrorLogin: (err) => { console.log(err) },
  onSuccessLogin: ()=>{},
  onSuccessLogout: ()=>{}
}

export default LoginWithButton = createContainer(() => {
  return {
    logged: !!Meteor.userId() || Meteor.loggingIn(),
  };
}, LoginWith);