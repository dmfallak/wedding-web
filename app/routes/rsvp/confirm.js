import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  actions: {
    confirm: function() {
      this.currentModel.set("responded", true);
      this.currentModel.save();
      this.transitionTo('index');
    },

    changeResponse: function() {
      this.transitionTo('rsvp.invitee');
    }
  }
});
