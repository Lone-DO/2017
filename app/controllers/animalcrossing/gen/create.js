import Ember from 'ember';

export default Ember.Controller.extend({
	labelName: '',
	releaseDate: '',
	platform: '',
	imageURL: '',
	hourID: [""],
	saveButtonText: 'Save',

	clearFields: function() {
		this.set('labelName', '');
		this.set('releaseDate', '');
		this.set('platform', '');
		this.set('imageURL', '');
		this.set('hourID', [""]);
	},

	actions: {
		saveAlbum: function() {
			const albumData = {
				labelName: this.get('labelName'),
				releaseDate: this.get('releaseDate'),
				platform: this.get('platform'),
				imageURL: this.get('imageURL'),
				hourID: this.get('hourID')
			},
				 url = '/api/albums',
				 that = this;
			this.set('saveButtonText', 'Saving...');
			Ember.$.post(url, albumData).then(function(saveResult) {
				if(saveResult.status === 'OK') {
					that.clearFields();
					that.transitionToRoute('animalcrossing.gen');
				} else {
					that.set('saveButtonText', 'Couldn\'t save. Try again?');
				}
			});
		}
	}
});
