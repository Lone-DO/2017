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
		this.route('troubleshoot');
		this.route('faq');
		this.route('about');
		this.route('demo');
		this.route('merch');
		this.route('contact');
		//  New Site Features
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
});

export default Router;
