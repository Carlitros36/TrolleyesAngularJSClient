miModulo.controller("HomeController", [
  "$scope",
  "auth",
  function ($scope, auth) {
    if (auth.data.status==200){
      $scope.datosDeSesion = auth.data;
    }
    $scope.controller = "HomeController";
    $scope.mensaje = "Bienvenidos a la práctica AJAX20 de DAW";
  }
]);
