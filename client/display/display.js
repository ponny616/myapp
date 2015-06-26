Template.display.helpers(
 {
	chat:  function(){
		return Chat.find({}, {sort: {time: -1}, limit: 10});	
	}
 }
)

Template.display.created = function(){
Session.set("activefilter", "all");
};

Template.display.events({
  'change #filter':function(){
    Session.set("activefilter",$('#filter').val());
  }
});

Template.display.chat = function(){
  var ac = Session.get("activefilter");
  var result = new Array();
  if(ac != undefined){
    var cursor = Chat.find({filter:ac});
    var data = cursor.fetch();

      for(var i = 0; i < data.length;i++){
        var nData = NextData.findOne({_id : data[i].Next_ID});
        result[i] = {
          username : nData.username,
          time: nData.time,
          message: nData.message
        };
      }

    cursor.rewind(); //we rewind our cursor here so that it can be iterated again from the beginning when needed

  return result;
  }
};