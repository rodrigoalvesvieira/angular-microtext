var app = angular.module('SampleApp', ['Microtext']).controller('itemsController', function($scope) {
    $scope.items = [
        "Rodrigo Alves Vieira",
        "Talita Gomes Pereira Barbosa",
        "Beatriz Alves Barbosa",
        "Juleide Maria Alves"
    ];

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
