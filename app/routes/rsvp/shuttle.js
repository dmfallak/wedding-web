import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    conflict: {
      refreshModel: true
    }
  },

  conflict: null,

  model(params) {
    var hasConflict = this.get('conflict');

    if (hasConflict) {
      $("#conflict").show();
    } else {
      $("#conflict").hide();
    }

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
