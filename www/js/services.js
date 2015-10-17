angular.module('starter.services', [])

.factory('Chats', function() {
  
  var chats = [{
    id: 0,
    name: 'Srinidhi',
    lastText: 'How are you doing?',
    face: 'http://images.onlinelabels.com/images/clip-art/acspike/acspike_male_user_icon.png'
  }, {
    id: 1,
    name: 'Srinidhi',
    lastText: 'what are you doing?',
    face: 'http://images.onlinelabels.com/images/clip-art/acspike/acspike_male_user_icon.png'
  }, {
    id: 2,
    name: 'Srinidhi',
    lastText: 'who are you ?',
    face: 'http://images.onlinelabels.com/images/clip-art/acspike/acspike_male_user_icon.png'
  }, {
    id: 3,
    name: 'Srinidhi',
    lastText: 'why are you here?',
    face: 'http://images.onlinelabels.com/images/clip-art/acspike/acspike_male_user_icon.png'
  }, {
    id: 4,
    name: 'Srinidhi',
    lastText: 'which app are you doing?',
    face: 'http://images.onlinelabels.com/images/clip-art/acspike/acspike_male_user_icon.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
