import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		sortByRecent: function () {
      		'use strict';
      		this.set('sortProperties', ['date']);
    	}
  	}
});
