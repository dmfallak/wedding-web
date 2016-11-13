import DS from "ember-data";

export default DS.Model.extend({
  invitee: DS.attr('string'),
  attendingMax: DS.attr('number'),
  attendingNum: DS.attr('number'),
  guestNames: DS.attr('string'),
  entree1: DS.attr('string'),
  entree2: DS.attr('string'),
  hotel: DS.attr('boolean'),
  shuttleToTime: DS.attr('string'),
  shuttleFromTime: DS.attr('string'),
  id: DS.attr('number'),
  attending: DS.attr('boolean')
});
