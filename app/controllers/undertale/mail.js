import Ember from 'ember';

export default Ember.Controller.extend({
	isEditing: false,
	repliesAreShowing: false,
	actions: {
		//Puts in Edit mode
		edit: function () {
			'use strict';
			this.set('isEditing', true);
		},
		//Saves Edits
		save: function () {
			'use strict';
			this.set('isEditing', false);
			this.transitionToRoute('mailbox');
		},
		//Deletes Mail
		delete: function () {
			'use strict';
			if (confirm('Are you sure?')) {
				this.get('model').destroyRecord();
				this.transitionToRoute('mailbox');
			}
		},
		//Reply Reveal and Conceal
		showReplies: function () {
			'use strict';
			this.set('repliesAreShowing', true);
		},
		hideReplies: function () {
			'use strict';
			this.set('repliesAreShowing', false);
		}
	}
});