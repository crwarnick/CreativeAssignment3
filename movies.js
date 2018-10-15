/*global angular*/
angular.module("movieApp", [])
    .controller("movieCtrl", function ($scope) {
        $scope.movies = [];
        $scope.winner = "";
        $scope.showVote1 = true;
        $scope.showVote2 = true;
        $scope.showVote3 = true;
        $scope.showVote4 = true;
        $scope.showVote5 = true;
        $scope.addToList = function() {
            console.log($scope.movie.vote1);
            $scope.movies.push({
                name: $scope.movie.name,
                vote1: 0,
                vote2: 0,
                vote3: 0,
                vote4: 0,
                vote5: 0,
                finalVote: 0
            });
            
            $scope.movie = "";
        };
        $scope.hideVotes1 = function() {
            $scope.showVote1 = false;
        };
        $scope.hideVotes2 = function() {
            $scope.showVote2 = false;
        };
        $scope.hideVotes3 = function() {
            $scope.showVote3 = false;
        };
        $scope.hideVotes4 = function() {
            $scope.showVote4 = false;
        };
        $scope.hideVotes5 = function() {
            $scope.showVote5 = false;
        };
        $scope.calculateMovie = function() {
            var vote = $scope.movies[0].vote1 + $scope.movies[0].vote2 + $scope.movies[0].vote3 + $scope.movies[0].vote4 + $scope.movies[0].vote5;
            $scope.winner = $scope.movies[0].name;
            for (var i = 0; i < $scope.movies.length; i++) {
                if (($scope.movies[i].vote1 + $scope.movies[i].vote2 + $scope.movies[i].vote3 + $scope.movies[i].vote4 + $scope.movies[i].vote5) < vote) {
                    vote = $scope.movies[i].vote1 + $scope.movies[i].vote2 + $scope.movies[i].vote3 + $scope.movies[i].vote4 + $scope.movies[i].vote5;
                    $scope.winner = $scope.movies[i].name;
                }
            }
        };
    });
