app.factory('Message', ['$firebase',
    function($firebase) {
        //var ref = new firebase('https://velocilinx-chat.firebaseio.com');
        var messages = firebase.database().ref('posts').on('value', function(snapshot) {
            console.log("snapshot: ",snapshot);
        });
         //var messages = $firebase(ref.child('messages')).$asArray();

        var Message = {
            all: messages,
            create: function(message){
                return messages.$add(message);
            },
            get: function(messageId){
                return $firebase(ref.child('messages').child(messageId)).$asObject();
            },
            delete: function(message){
                return messages.$remove(message);
            }
        };
        return Message;
    }
]);
