angular.module('marvelCardsApp').controller('cardsCtrl', function ($scope, $state, cardService) {


    $scope.goToHomeView = function () {
        $state.go('home');
    };

    $scope.goToCardView = function () {
        $state.go('card');
    };

    $scope.getCard = function () {
        $scope.loading = true;
        $scope.loaded = false;
        var offset = random(1, 1485);

        cardService.getOneCard(offset).then(function (response) {

            if (response === 'NO DESCRIPTION, TRY AGAIN!') {
                console.log(response);
                $scope.getCard();
            } else {
                $scope.character = response;
                $scope.loading = false;
                $scope.loaded = true;

                console.log($scope.character);
            }
        })
    };
    
    $scope.getCard();
    
    
    
    // Generate Random Number for Card Offset //
    function random(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    };

});