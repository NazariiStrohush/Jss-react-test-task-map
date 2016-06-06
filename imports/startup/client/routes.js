import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Index from '/imports/ui/components/index.jsx';
import LoginPage from '/imports/ui/components/login-page.jsx';
import App from '/imports/ui/pages/app.jsx';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } /*onEnter={ requireAuth }*//>
        <Route path="login" component={ LoginPage }/>
      </Route>
    </Router>, 
    document.getElementById( 'react-root' ) 
  );
});