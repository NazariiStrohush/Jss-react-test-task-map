import { Meteor } from 'meteor/meteor';
import { Queries } from '../../queries.js';

Meteor.publish('queries', () => Queries.find());
