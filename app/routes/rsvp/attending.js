import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  actions: {
    submitYes: function() {
      var guest = this.currentModel;

      guest.set("attending", true);

      if (guest.get('attendingMax') > 1) {
        this.transitionTo('rsvp.num_attendees', guest);
      } else {
        this.currentModel.set("attendingNum", 1);
        this.transitionTo('rsvp.meal_choices', guest);
      }
    },

    submitNo: function() {
      this.currentModel.set("attending", false);
      this.transitionTo("rsvp.confirm", this.currentModel);
    }
  }
});
