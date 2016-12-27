import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    	save: function () {
      		'use strict';
			var newMail = this.store.createRecord('mail', {
				user: this.get('user'),
          		text: this.get('text')
        	});
      		newMail.save();
      		this.transitionToRoute('mailbox');
   		}
   	}
});