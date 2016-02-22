angular.module('marvelCardsApp').controller('cardsCtrl', function ($scope, cardService) {

    $scope.getCard = function () {
        var offset = random(1, 1485);

        cardService.getOneCard(offset).then(function (response) {
            console.log(response);
        })
    }();
    
    
    
    // Generate Random Number for Card Offset //
    function random(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    };

});