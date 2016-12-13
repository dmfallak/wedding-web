import Ember from 'ember';

export default Ember.Controller.extend({
  attendeeNameInputs: Ember.computed('model.attendingNum', function() {
    var inputs = [];
    var max = this.get('model').get("attendingNum");
    for (var i = 1; i <= max; i++) {
      inputs.push(i);
    }

    return inputs;
  })
});
