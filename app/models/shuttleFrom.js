import DS from "ember-data";

export default DS.Model.extend({
  id: DS.attr('number'),
  time: DS.attr('string'),
  seatsMax: DS.attr('number'),
  seatsFree: DS.attr('number')
});
