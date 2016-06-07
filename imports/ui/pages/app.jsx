import React, {propTypes, Component} from 'react';
import { Grid } from 'react-bootstrap';

import NavBar from '/imports/ui/components/navbar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
        <NavBar/>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}