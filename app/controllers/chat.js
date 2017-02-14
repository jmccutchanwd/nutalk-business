/* John McCutchan ========================================= */
console.log('ChatCtrl-on');
app.controller('ChatCtrl', ['$scope', 'Message', function($scope, Message){ // arg 1 is name of control, arg 2 is function with scope name
  $scope.user="Guest";
  $scope.messages = Message.all;
  $scope.sendMessage = function(message){
        Message.create(message);
      };
}]);
