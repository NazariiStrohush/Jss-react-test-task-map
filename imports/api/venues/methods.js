import { Meteor } from 'meteor/meteor';
import { Queries } from '../queries.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import 'meteor/lfergon:exportcsv';

export const exportCsv = new ValidatedMethod({
  name: 'export.csv',
  validate: new SimpleSchema({
    data: { type: [Object], blackbox: true }
  }).validator(),
  run(venues) {
  	const heading = true;
    const delimiter = ';';
    return exportcsv.exportToCSV(venues.data, heading, delimiter);
  },
});