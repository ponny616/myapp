 Template.rate.helpers({
    'animes': function(){
      var currentUserId = Meteor.userId();
      return Anime.find({createdBy: currentUserId},
                            {sort: {score: -1, name: 1}})
    },

    'selectedClass': function (){
      var playerId = this._id;
      var selectedAnime = Session.get('selectedAnime');
      if(playerId == selectedAnime){
        return "selected"
      }
    }

    //'showSelectedAnime': function(){
      //var selectedAnime = Session.get('selectedAnime');
      //return Anime.findOne(selectedAnime)
    //}
  });

  Template.rate.events({
    'click .animes': function(){
      var playerId = this._id;
      Session.set('selectedAnime', playerId); 
    },
    'click .remove': function(){
      var selectedAnime = Session.get('selectedAnime');
      Anime.remove(selectedAnime);
    },
    'click .scored': function(){
      var selectedAnime = Session.get('selectedAnime');
      Anime.update(selectedAnime, {$inc: {score: -10}});
    },
    'click .scorep': function(){
      var selectedAnime = Session.get('selectedAnime');
      Anime.update(selectedAnime, {$inc: {score: 10}});
    }
  });
  
  Template.addAnimeForm.events({
    'submit form': function(event){
      event.preventDefault();
      var animeNameVar = event.target.animeName.value;
      var currentUserId = Meteor.userId();
      Anime.insert({
        name: animeNameVar, 
        score: 0,
        createdBy: currentUserId
      })
    }
  });