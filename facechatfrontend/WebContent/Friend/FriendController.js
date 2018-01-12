myapp.controller("FriendController", function($scope, $http, $location, $rootScope)
		{
	      $scope.friend={friendId:0,username:'',friendname:'',status:''};
	      $scope.allFriendRequest;
	      
	      function fetchAllFriendRequest()
	      {
	    	  console.log('Fetching all friend requests');
	    	  $http.get('http://localhost:8080/fcmiddleware/getAllFriendRequest')
	    	  .then(function(response)
	    		{
	    		  $scope.allFriendRequest=response.data;
	    		  console.log($scope.allFriendRequest);
	    		});
	      }
	      
	      fetchAllFriendRequest();
	      
	      
	      $scope.reject=function(friendId)
	      {
	    	  console.log('Reject for friend Request');
	    	  $http.get('http://localhost:8080/fcmiddleware/rejectfriendrequest/'+friendId)
	    	  .success(function(response)
	    	{
	    		  console.log('Rejected successfully');
	    	});
	      }
	      
	      
	      $scope.approve=function(friendId)
	      {
	    	  console.log('approve for friend Request');
	    	  $http.get('http://localhost:8080/fcmiddleware/approvalfriendrequest/'+friendId)
	    	  .success(function(response)
	    	{
	    		  console.log('approved successfully');
	    	});
	      }
	      
});//controller