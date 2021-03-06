Meteor.publish("theProfiles",function(){return Profiles.find();});
Meteor.publish("theIPs",function(){return IPAddresses.find();});
Meteor.publish("theColors",function(){return Colors.find();});
Meteor.publish("theChat",function(){return Chat.find();});
Meteor.publish("theDisplay",function(){return Display.find();});
Meteor.publish("theLearn",function(){return Learn.find();});
Meteor.publish("theAnime",function(){return Anime.find();});
Meteor.publish("theUpdates",function(){return Updates.find();});
Meteor.publish("thePlayers",function(){return PlayerList.find();});

//Meteor.publish("theMessage",function(){return Message.find();});



Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

