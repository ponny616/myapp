Template.chat.helpers({
	ismine: function(){
      var currentUserId = Meteor.userId();
      return currentUserId == this.uid;
    },

	chatting:  function(){
		var currentUserId = Meteor.userId();
		return Chat.find({}, {sort: {time: -1}, limit: 10});
	}
})

Template.chat.events({
	"submit #createmessage": function(event){
		event.preventDefault();

		var message = event.target.message.value;
		//var username = Meteor.user().profile.userName;

		console.log(JSON.stringify(this));

		Chat.insert({
			uid: Meteor.userId(),
			username:Meteor.user().profile.userName, 
			time:new Date(), 
			message:message});
	}
})
