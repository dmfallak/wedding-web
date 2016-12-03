import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  actions: {
    submitInvitee: function(invitee) {
      var store = this.get("store");
      var guest = Ember.$.getJSON("/api/guest/" + invitee)
    }
  }
});
