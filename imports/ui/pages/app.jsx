import React, {propTypes, Component} from 'react';
import { Grid } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        {this.props.children}
      </Grid>
    );
  }
}