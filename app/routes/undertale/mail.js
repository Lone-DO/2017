import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
    	'use strict';
    	return this.store.findRecord('mail', params.mail_id);
	}
});
