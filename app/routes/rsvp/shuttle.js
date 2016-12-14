import Ember from 'ember';

export default Ember.Route.extend({
   model(params) {
    return {
      guest: this.store.findRecord('guest', params.guest_id),
      shuttleFrom: this.store.findAll('shuttleFrom'),
      shuttleTo: this.store.findAll('shuttleTo')
    };
  }
});
