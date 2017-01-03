import Ember from 'ember';

const {
	Route,
	set
} = Ember;

export default Route.extend({
	model(params) {
		return this.store.query('post', {userId: params.id})
	}, 
	setupController(controller, model) {
		set(controller, 'posts', model);
	}
});
