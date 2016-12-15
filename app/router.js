import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('directions');
  this.route('rsvp', function() {
    this.route('invitee');
    this.route('num_attendees', { path: 'num_attendees/:guest_id' });
    this.route('attendee_names', { path: 'attendee_names/:guest_id' });
    this.route('meal_choices', { path: 'meal_choices/:guest_id' });
    this.route('attending', { path: 'attending/:guest_id' });
    this.route('hotel', { path: 'hotel/:guest_id' });
    this.route('shuttle', { path: 'shuttle/:guest_id' });
    this.route('confirm', { path: 'confirm/:guest_id' });
  });
});

export default Router;
