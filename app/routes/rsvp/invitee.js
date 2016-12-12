import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  actions: {
    submitInvitee: function(invitee) {
      var store = this.get("store");
      var route = this;
      store.queryRecord('guest', {filter: {invitee: invitee}}).then(function(guest) {
        route.transitionTo('rsvp.attending', guest)
      });
    }
  }
});
