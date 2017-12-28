myapp.controller("ForumController",function($scope,$http)
{
	$scope.forum={forumId:23,forumName:"",username:"",forumContent:"",creationDate:"",likes:3,userid:"",status:"A"};
	$http.get("http://localhost:8080/fcmiddleware/getAllForums")
	.then(function(response)
	{
	$scope.forumdata=response.data;
	});
	
	$scope.addForum=function()
	{
		console.log('Entered into InsertForum');
		$http.post('http://localhost:8080/fcmiddleware/insertForum',$scope.forum)
		.then(function(response)
				{
				console.log('Successful Blog Entered');
				});
		}
});