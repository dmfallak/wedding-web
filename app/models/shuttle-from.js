import DS from "ember-data";

export default DS.Model.extend({
  time: DS.attr(),
  seatsMax: DS.attr(),
  seatsFree: DS.attr()
});
