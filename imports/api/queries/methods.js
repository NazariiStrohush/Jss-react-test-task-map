import { Meteor } from 'meteor/meteor';
import { Queries } from '../queries.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertQuery = new ValidatedMethod({
  name: 'query.insert',
  validate: new SimpleSchema({
    name: { type: String },
    lat: { type: Number, decimal: true},
    lng: { type: Number , decimal: true},
    distance: { type: Number, decimal: true},
  }).validator(),
  run(document) {
  	document.date = new Date();
    document.userId = Meteor.userId();
    Queries.insert(document);
  },
});

export const removeQuery = new ValidatedMethod({
  name: 'query.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    const query = Queries.findOne({_id: _id, userId: Meteor.userId()});
    if(query){
      Queries.remove({_id: _id});
    }
  },
});

/*export const updateDocument = new ValidatedMethod({
  name: 'documents.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Documents.update(_id, { $set: update });
  },
});
*/