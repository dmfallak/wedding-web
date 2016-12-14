import Ember from 'ember';

export default Ember.Controller.extend({
  attendingNumChoices: Ember.computed('model.attendingMax', function() {
    var choices = [];
    var max = this.get('model').get("attendingMax");
    for (var i = 1; i <= max; i++) {
      choices.push(i);
    }

    return choices;
  })
});
