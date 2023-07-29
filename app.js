angular.module('chatApp', [])
    .controller('ChatController', function ($scope) {
        $scope.messages = [];
        $scope.userMessage = "";

        $scope.sendMessage = function (event) {
            if (!event || event.keyCode === 13) {
                var userMessage = $scope.userMessage.trim();
                if (userMessage !== "") {
                    $scope.messages.push({
                        sender: "User",
                        text: userMessage
                    });
                    $scope.userMessage = "";

                    // Simulate AI response
                    setTimeout(function() {
                        $scope.$apply(function() {
                            $scope.messages.push({
                                sender: "ChatGPT",
                                text: "Hello"
                            });
                        });
                    }, 500);
                }
            }
        };
    });
