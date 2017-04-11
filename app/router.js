import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
	
  this.route('projects', {path: '/projects'}, function() {
		
	});
	
	this.route('animalcrossing', {path: '/actunes'}, function() {
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
});

export default Router;