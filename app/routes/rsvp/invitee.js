import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  actions: {
    submitInvitee: function(invitee) {
      var store = this.get("store");
      var route = this;
      store.queryRecord('guest', {invitee: invitee}).then(function(guest) {
        if (guest.get('responded')) {
          route.transitionTo('rsvp.already_responded');
        } else {
          route.transitionTo('rsvp.attending', guest);
        }
      });
    }
  }
});
