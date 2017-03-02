import DS from 'ember-data';

export default DS.Model.extend({
  responses: DS.hasMany('guest'),
  noResponse: DS.hasMany('guest'),
  password: DS.attr()
});
