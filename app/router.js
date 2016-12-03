import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('directions');
  this.route('rsvp', function() {
    this.route('invitee');
    this.route('guests');
  });
});

export default Router;
