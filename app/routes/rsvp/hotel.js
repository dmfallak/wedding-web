import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  actions: {
    submitNo: function() {

    },

    submitYes: function() {
      this.currentModel.set("hotel", true);
      this.transitionTo('rsvp.shuttle', this.currentModel);
    }
  }
});
