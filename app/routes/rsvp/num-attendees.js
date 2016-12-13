import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  /* globals $ */
  actions: {
    next: function() {
      var num = $("#attendingNumSelect").val();
      this.currentModel.set("attendingNum", num);
      this.transitionTo('rsvp.attendee_names', this.currentModel);
    }
  }
});
