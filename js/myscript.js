const URL = 'https://covid19.mathdro.id/api';

let app = angular.module('MyApp',[]);

app.controller('MyCtrl', ($scope, $http) =>{
    $scope.title = "/-Stay Home Stay Safe Always Use Mask And Hand Sanitizer/-";

    console.log("App Loaded");

    // calling api

    $http.get(URL).then(
        (response) => {

            // success call


            console.log(response.data);

            $scope.all_data = response.data;


        },
        (error) =>{
            // error
            console.log(error);
        }
    );
    // country data
    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == "") {
            $scope.c_data=undefined
            return;
        }


            $http.get(`${URL}/countries/${country}`).then(
                (response) => {
                    console.log(response.data);
                    $scope.c_data = response.data;

                },
                    (error) => {
                        console.log(error);

                    }

                );


        };

    });