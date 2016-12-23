import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  /* globals $ */
  actions: {
    submitInvitee: function(invitee) {
      var store = this.get("store");
      var route = this;
      store.queryRecord('guest', {invitee: invitee}).then(function(guest) {
        $("#inviteeGroup").removeClass("has-error");
        $("#helpBlock").css("display", "none");

        if (guest.get('responded')) {
          route.transitionTo('rsvp.already_responded');
        } else {
          route.transitionTo('rsvp.attending', guest);
        }
      }, function(reason){
        if (reason.errors[0].status === "404") {
          $("#inviteeGroup").addClass("has-error");
          $("#helpBlock").css("display", "inline");
        }
      });
    }
  }
});
