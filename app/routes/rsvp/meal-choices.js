import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guest', params.guest_id);
  },

  /* globals $ */
  actions: {
    next: function() {
      var guestNames = this.currentModel.get("guestNames");
      guestNames = guestNames.split(",");
      
      var entree1List = "";
      var entree2List = "";
      var sideList = "";

      for (var i = 0; i < guestNames.length; i++) {
        var entree1 = $("#entree1-"+i).val();
        var entree2 = $("#entree2-"+i).val();
        var side = $("#side-"+i).val();

        if (entree1List !== "") {
          entree1List += ",";
          entree2List += ",";
          sideList += ",";
        }

        entree1List += entree1;
        entree2List += entree2;
        sideList += side;
      }

      this.currentModel.set("entree1", entree1List);
      this.currentModel.set("entree2", entree2List);
      this.currentModel.set("side", sideList);
      this.transitionTo('rsvp.hotel', this.currentModel);
    }
  }
});
