import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['mail'],
	actions: {
		save: function () {
			'use strict';
			let reply = this.store.createRecord('reply', {
				text: this.get('text')
			}),
			mail = this.get('controllers.mail.model');
			reply.save();
			mail.get('replies').pushObject(reply);
			mail.save();  
			this.transitionToRoute('mail', mail.id);
		}
	}
});
