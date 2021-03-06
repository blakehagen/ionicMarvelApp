angular.module('marvelCardsApp').service('cardService', function ($http, $q) {

    var baseUrl = 'http://gateway.marvel.com:80/v1/public/';
    var pubKey = '&apikey=f6e4101a2b2abbe55c63255d00b39292';

    this.getOneCard = function (offset) {
        console.log(offset);
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: baseUrl + 'characters?limit=1&offset=' + offset + pubKey
        }).then(function (response) {
            var cardData = response.data.data.results[0];
            if (!cardData.description) {
                deferred.resolve('NO DESCRIPTION, TRY AGAIN!')
            } else {
                cardData.image = cardData.thumbnail.path + '/standard_fantastic.' + cardData.thumbnail.extension;

                deferred.resolve(cardData)
            }
        })
        return deferred.promise
    }

});