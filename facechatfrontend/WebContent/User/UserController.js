myapp.controller("UserController",function($scope,$http)
{
	$scope.user={userId:"",userName:"",password:"",emailId: "",isOnline: "N",role: "user"};
	
	$scope.addUser=function()
	{
		console.log('Entered into User');
		$http.post('http://localhost:8080/fcmiddleware/register',$scope.user)
		.then(function(response)
				{
				console.log('Successful User Registered');
				});

	}

	scope.login=function()
	{
		console.log("Logging Function");
		$http.post('http://localhost:8080/fcmiddleware/login',$scope.user)
		.then(function(response)
				{
            $scope.user=response.data;
            $location.path("/UserHome");
				});
	}	
});