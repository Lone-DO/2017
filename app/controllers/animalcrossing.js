import Ember from 'ember';

export default Ember.Controller.extend({
	 actions: {
	 	end: function () {
            this.set('isStarted', false);
        },
        showHint: function () {
            this.set('hintShowing', true);
        },
        hideHint: function () {
            this.set('hintShowing', false);
        }
    }
});