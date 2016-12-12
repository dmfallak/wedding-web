import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  actions: {
    submitInvitee: function(invitee) {
      var store = this.get("store");
      store.queryRecord('guest', {filter: {invitee: invitee}}).then(function(guest) {
        console.log("Found guest: " + guest.get('invitee'));
      });
    }
  }
});
