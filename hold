import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('projects', {path: '/projects'});

	this.route('animalcrossing', {path: '/actunes'}, function() {
		this.route('guide');
		this.route('clock');
	    this.route('gen', {path: '/gen'}, function() {
	        this.route('create');
	    });
	});

	this.route('undertale', {path: '/undertale'}, function() {
  	
  	});

  	this.route('legacy', {path: '/legacy'});
});

export default Router;
