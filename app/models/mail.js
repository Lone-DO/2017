import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.attr(),
	text: DS.attr(),
  	//Relates Comments to said Mail
  	replies: DS.hasMany('reply', {async: true}),
  	//Sets up relationship with Mailbox Page
  	mailbox: DS.belongsTo('mailbox', {async: true})
});