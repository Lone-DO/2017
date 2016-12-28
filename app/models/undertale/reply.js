import DS from 'ember-data';

export default DS.Model.extend({
	text: DS.attr(),
  	//Sets up relationship with Mail
  	mail: DS.belongsTo('mail', {async: true})
});