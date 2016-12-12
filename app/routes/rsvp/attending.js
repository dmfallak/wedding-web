import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  actions: {
    submitYes: function() {
      var guest = this.currentModel;

      if (guest.get('attendingMax') > 1) {
        this.transitionTo('rsvp.num_attendees', guest);
      } else {
        this.transitionTo('rsvp.meal_choices', guest);
      }
    },

    submitNo: function() {

    }
  }
});
