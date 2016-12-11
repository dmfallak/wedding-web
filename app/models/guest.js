import DS from "ember-data";

export default DS.Model.extend({
  invitee: DS.attr(),
  attendingMax: DS.attr(),
  attendingNum: DS.attr(),
  guestNames: DS.attr(),
  entree1: DS.attr(),
  entree2: DS.attr(),
  hotel: DS.attr(),
  shuttleToTime: DS.attr(),
  shuttleFromTime: DS.attr(),
  attending: DS.attr()
});
