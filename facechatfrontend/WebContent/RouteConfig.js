var myapp=angular.module("myApp",['ngRoute','ngCookies']);//'ngCookies'

myapp.config(function($routeProvider)
		{
		 $routeProvider.when("/",{templateUrl:"User/UserHome.html"})
						  .when("/Blog",{templateUrl:"Blog/Blog.html"})
						  .when("/AdminBlog",{templateUrl:"Blog/AdminBlog.html"})
						  .when("/Forum",{templateUrl:"Forum/Forum.html"})
			              .when("/Register",{templateUrl:"User/Register.html"})
			              .when("/Login",{templateUrl:"User/Login.html"})
			               .when("/Logout",{templateUrl:"User/Logout.html"})
			               .when("/Job",{templateUrl:"Job/Jobinsert.html"})
				              .when("/Showjob",{templateUrl:"Job/Showjob.html"})
				              .when("/Friend",{templateUrl:"User/Friend.html"})
				              .when("/FriendRequest",{templateUrl:"Friend/FriendRequest.html"})
				              .when("/Logout",{templateUrl:"User/Logout.html"})
				              .when("/ProfilePicture",{templateUrl:"User/ProfilePicture.html"})
				              
		});
		myapp.run(function($rootScope,$cookieStore)
		{
			console.log("im in Run function");
			console.log($rootScope.currentUser);
			
			if($rootScope.currentUser==undefined)
				{
				$rootScope.currentUser=$cookieStore.get('user');
				}
			      else
				{
				   console.log($rootScope.currentUser.username);
				   console.log($rootScope.currentUser.role);
				}
		});
