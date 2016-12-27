import Ember from 'ember';

export default Ember.Controller.extend({
	navShowing: true,
	actions: {
		//Reply Reveal and Conceal
    	navHide: function () {
      		'use strict';
      		this.set('navShowing', false);
    	},
  	}
});
