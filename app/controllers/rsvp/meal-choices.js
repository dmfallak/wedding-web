import Ember from 'ember';

export default Ember.Controller.extend({
  mealChoiceInputs: Ember.computed('model.guestNames', function() {
    var inputs = [];
    var guestNames = this.get('model').get("guestNames");
    guestNames = guestNames.split(",");
    for (var i = 0; i < guestNames.length; i++) {
      inputs.push(guestNames[i]);
    }

    return inputs;
  })
});
