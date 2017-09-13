var app = angular.module("uyApp", ['zingchart-angularjs']);
app.controller("uyAppController", function ($scope,$http,$timeout) {

	$http({ method: 'POST', url: 'JsonData1.json' }).success(function (data) {
		$scope.users = data; 
	}).
	error(function (data) {
		console.log(data);
	});
	var tot=0;
	$http({ method: 'POST', url: 'JsonData2.json' }).success(function (data) {
		$scope.sales = data; 
	}).
	error(function (data) {
		console.log(data);
	});

	$timeout(function() {
		$scope.newArray = $scope.users.map(function(item){
			item.total = $scope.sales.reduce(function(pre, obj){
				if(item.ProgramID == obj.ProgramID)
				return pre +=obj.Sales
				else 
				return pre			
			},0)
			return item		
		})	
	}, 1000);
});