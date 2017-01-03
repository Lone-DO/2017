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
		// put your routes here
		this.route('app', function() {
				this.route('guide');
				this.route('clock');
		});//default
		
		this.route('gen', {path: '/gen'}, function() {
				this.route('create');
		});
	});

	this.route('undertale', {path: '/undertale'}, function() {
		this.route('hub', {path: '/'});
		this.route('troubleshoot');
		this.route('faq');
		this.route('about');
		this.route('demo');
		this.route('merch');
		this.route('contact');
		//Fanmail Interface
		this.route('mailbox', function () {
			this.route('mail', {path: 'mails/:mail_id'}, function () {
				this.route('new-reply');
			});
		});
		this.route('new-mail');
		//Gallery for Fan made Art Collections
		this.route('gallery');
		//Musicbox for variety of Undertale Hit tunes
		this.route('musicbox');
	});

	this.route('legacy', {path: '/legacy'});

	//API testing pacakage... ignore//
	/**/this.route('posts', function() {
	/**/  this.route('user', {path: '/user/:id/'});
	/**/  this.route('show', {path: '/:id/'});
	/**/});
	/***********************************/
});

export default Router;