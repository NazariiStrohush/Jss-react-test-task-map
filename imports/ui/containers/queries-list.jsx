import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Queries } from '/imports/api/queries.js';
 
import QueriesList from '../components/queries-list.jsx';
 
export default QueriesListContainer = createContainer(() => {
  Meteor.subscribe('queries');
  return {
    queries: Queries.find({}).fetch(),
  };
}, QueriesList);