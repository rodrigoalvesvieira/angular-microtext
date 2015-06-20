var app = angular.module('SampleApp', ['rodrigoalves.microtext']).controller('itemsController', function($scope, $filter) {
    $scope.items = [
        "Rodrigo Alves Vieira",
        "Talita Gomes Pereira Barbosa",
        "Beatriz Alves Barbosa",
        "Juleide Maria Alves"
    ];

    $scope.appName = $filter("parameterize")("angular microtext"); // angular-microtext

    $scope.artists = [
        'belchior',
        'raul seixas',
        'cartola',
        'gonzaguinha'
    ];

    $scope.emails = [
        'jimi@hendrix.com',
        'eric@clapton.com',
        'jimmy@page.com',
        'frank@zappa.com',
        'john@frusciante.com'
    ];

    $scope.badWords = [
        'Boneheaded',
        'Goose-brain',
        'Blasted'
    ]
});
