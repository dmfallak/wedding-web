import Ember from 'ember';

export default Ember.Route.extend({
   model(params) {
    return {
      guest: this.store.findRecord('guest', params.guest_id),
      shuttleFrom: this.store.findAll('shuttleFrom'),
      shuttleTo: this.store.findAll('shuttleTo')
    };
  },

  /* globals $ */
  actions: {
    next: function() {
      var toSelection = $('input[name=shuttleTo]:checked').val();
      var fromSelection = $('input[name=shuttleFrom]:checked').val();

      this.currentModel.guest.set("shuttleToTime", toSelection);
      this.currentModel.guest.set("shuttleFromTime", fromSelection);
      this.transitionTo('rsvp.confirm', this.currentModel.guest);
    }
  }
});
