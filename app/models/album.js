import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	date: DS.attr('string'),
	platform: DS.attr('string'),
	imageURL: DS.attr('string'),
	hourID: DS.attr('string')
});
