import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  actions: {
    confirm: function() {
      this.currentModel.set("responded", true);
      var route = this;
      this.currentModel.save().catch(function(reason) {
        if (reason.errors[0].status === "400") {
          route.transitionTo('rsvp.shuttle', route.currentModel.get('id'), 
            {queryParams: {conflict:true}});
        }
      });
      this.transitionTo('index');
    },

    changeResponse: function() {
      this.transitionTo('rsvp.invitee');
    }
  }
});
