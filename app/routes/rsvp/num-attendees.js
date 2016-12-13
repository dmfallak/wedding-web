import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  /* globals $ */

  actions: {
    next: function() {
      var num = this.currentModel.get("attendingNum");
      var max = this.currentModel.get("attendingMax");

      if (num < 1 || num > max) {
        $("#attendingNumGroup").addClass("has-error");
        $("#helpBlock").css("display", "inline");
      }
      console.log("attendingNum is "+num);
    }
  }
});
