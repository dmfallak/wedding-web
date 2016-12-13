import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  /* globals $ */
  actions: {
    next: function() {
      var attendingNum = this.currentModel.get("attendingNum");
      var guestNames = "";

      for (var i = 1; i <= attendingNum; i++) {
        var guestName = $("#attendee" + i).val();

        if (guestNames != "") {
          guestNames += ",";
        }

        guestNames += guestName;
      }

      this.currentModel.set("guestNames", guestNames);
      this.transitionTo('rsvp.meal_choices', this.currentModel);
    }
  }
});
