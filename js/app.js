
(function(){

	var oldHref = location.href;
	var lastPartOfUrl = oldHref.match(/([^\/]*)\/*$/)[1];
	var allLi = $(".mainMenu li");
	allLi.removeClass('selected');
	$("#"+lastPartOfUrl).addClass('selected');
	
	
	var $li = $('.mainMenu li').click(function() {
    	$li.removeClass('selected');
    	$(this).addClass('selected');
	});


	// var state = document.readyState
	//   if (state == 'complete') {
	//       setTimeout(function(){
	//           document.getElementById('interactive');
	//          document.getElementById('showRecords').style.visibility="hidden";
	//       },1000);
	//   }

})();


  // var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BAhYHLwF7qoOdtTDozlaIIie6iT5b3O3you8M_8LqqI/pubhtml?gid=524430781&single=true';

  // function loadDataUsingJquery() {
  //   Tabletop.init( { key: publicSpreadsheetUrl,
  //                    callback: showInfo,
  //                    simpleSheet: true } )
  // }

  // function showInfo(data, tabletop) {
  //   console.log('Successfully processed!');
  //   console.log(data);
  //   console.log(tabletop);
  // }



myApp.controller('createPaseCtrl', function($scope){
	$scope.welcomeMsg = "Create PASE Schedule Page";
	$scope.comingSoon = "Coming Soon";
	
});


myApp.controller('viewPaseCtrl', function($scope, $http){

	$scope.welcomeMsg = "View PASE Schedule";
	$scope.comingSoon = "Coming Soon";
	$scope.publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BAhYHLwF7qoOdtTDozlaIIie6iT5b3O3you8M_8LqqI/pubhtml?gid=524430781&single=true';
	$scope.excelRes, $scope.lastRecord, $scope.noOfRecords;
	$scope.showCheck = false;
	

	$scope.loadDataUsingAngularJS = function() {
		Tabletop.init( { key: this.publicSpreadsheetUrl,
                     callback: this.showInfo,
                     simpleSheet: true } );
		$scope.showCheck = true;
	};

	$scope.showInfo = function(data, tabletop){
		console.log('Successfully processed!');
    	$scope.excelRes = data;

    	//console.log($scope.excelRes);
		$scope.noOfRecords = data.length;
    	$scope.lastRecord = $scope.excelRes[$scope.excelRes.length-1];
    	console.log($scope.lastRecord);
	};
	
});







