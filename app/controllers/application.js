import Ember from 'ember';

export default Ember.Controller.extend({
	Default: true, //defaults app to not started
	Projects: false, //defaults Projects to not show
	Legacy: false, //defaults Legacy to not show
	Other: false, //defaults special apps to not show

	actions: {
		isDef: function() {
			this.set('Default', true);
			this.setProperties({
				Projects: false,
				Legacy: false,
				Other: false
			})
		},
		isProj: function() {
			this.set('Projects', true);
			this.setProperties({
				Default: false,
				Legacy: false,
				Other: false
			})
		},
		isLeg: function() {
			this.set('Legacy', true);
			this.setProperties({
				Projects: false,
				Default: false,
				Other: false
			})
		},
		isOther: function() {
			this.set('Other', true);
			this.setProperties({
				Projects: false,
				Legacy: false,
				Default: false
			})
		}
	}
});
