import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

/* globals $ */

function reapplyOrientation() {
	if ($(window).width() < $(window).height()) {
		$("body").addClass("portrait");
		$("body").removeClass("landscape");
	} else {
		$("body").removeClass("portrait");
		$("body").addClass("landscape");
	}
}

$().ready(function() {
	reapplyOrientation();

	$(window).resize(function() {
		reapplyOrientation();
	});
});
