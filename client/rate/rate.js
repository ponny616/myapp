 Template.rate.helpers({
    'animes': function(){
      var currentUserId = Meteor.userId();
      return Anime.find({}, {sort: Session.get('animeSort')});
    },

    ismyrow: function(){
      var currentUserId = Meteor.userId();
      return currentUserId == this.uid;
    },

    'selectedClass': function (){
      //var playerId = this._id;
      var selectedAnime = Session.get('selectedAnime');
      return Anime.findOne(selectedAnime);
      //if(playerId == selectedAnime){
        //return "selected"
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
      //var currentUserId = Meteor.userId();
      //var selectedAnime = Session.get('selectedAnime');
      //Anime.remove(selectedAnime);
      Anime.remove(this._id);
    },
    'click #nameUp':function(){
        Session.set('animeSort', {name: 1});       
    },
    'click #nameDown':function(){
        Session.set('animeSort', {name: -1});
    },
    'click #scoreUp':function(){
        Session.set('animeSort', {score: 1});       
    },
    'click #scoreDown':function(){
        Session.set('animeSort', {score: -1});
    },
    'click .scored': function(){
      var playerId = this._id;
      Session.set('selectedAnime', playerId);
      var selectedAnime = Session.get('selectedAnime');
      Anime.update(selectedAnime, {$inc: {score: -10}});
    },
    'click .scorep': function(){
      var playerId = this._id;
      Session.set('selectedAnime', playerId);
      var selectedAnime = Session.get('selectedAnime');
      Anime.update(selectedAnime, {$inc: {score: 10}});
    }
  });
  
  Template.addAnimeForm.events({
    'submit form': function(event){
      event.preventDefault();
      var animeNameVar = event.target.animeName.value;
      //var currentUserId = Meteor.userId();
      Anime.insert({
        uid: Meteor.userId(),
        name: animeNameVar, 
        score: 100,
        //createdBy: currentUserId,
        username: Meteor.user().profile.userName
      })
    }
  });
