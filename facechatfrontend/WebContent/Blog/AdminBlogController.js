myapp.controller("AdminBlogController",function($scope,$http)
{
	$scope.blog={blogId:23,blogName:"",blogContent:"",createDate:"",likes:3,userid:"",status:"A"};
	$scope.blogdata;
	
	function fetchAllBlog()
	{
		console.log("Fetching All Blogs");
		$http.get("http://localhost:8080/fcmiddleware/getAllBlogs")
	    .then(function(reponse)
	    		{
	    	$scope.blogdata=response.data;
	    		});
	};
	fetachAllBlog();
	
	$scope.rejectBlog=function(blogid)
	{
		console.log('Entered into InsertBlog');
		$http.get("http://localhost:8080/fcmiddleware/rejectBlog/"+blogid)
		.then(fetchAllBlog(),function(response)
				{
				console.log('Blog is Rejected');
				});
	}
	
	$scope.approveBlog=function(blogid)
	{
		console.log('Entered into InsertBlog');
		$http.get("http://localhost:8080/fcmiddleware/approveBlog/"+blogid)
		.then(fetchAllBlog(),function(response)
				{
				console.log('Blog is Approved');
				});
	}
});

