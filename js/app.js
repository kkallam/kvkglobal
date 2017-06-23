
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
})();



// PASE Meeting Details
myApp.controller('createPaseCtrl', function($scope){
	$scope.welcomeMsg = "Create PASE Schedule Page";
	$scope.comingSoon = "Coming Soon";
	
});
myApp.controller('viewPaseCtrl', function($scope, $http){

	$scope.welcomeMsg = "View PASE Schedule";
	$scope.comingSoon = "Coming Soon";

	$scope.paseMeetingScheduleSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1vAonmEZvVpqFWnYgiWPhyl3Ud3NSXwVKgQS9_5EqL_I/pubhtml?gid=579927273&single=true';
	$scope.excelRes, $scope.lastRecord, $scope.noOfRecords;
	$scope.showCheck = false;
	
	$scope.loadDataUsingAngularJS = function() {
		Tabletop.init( { key: this.paseMeetingScheduleSpreadsheetUrl,
                     callback: this.showInfo,
                     simpleSheet: true } );
		$scope.showCheck = true;
	};

	$scope.showInfo = function(data, tabletop){
		console.log('Successfully PASE Data processed!');
    	$scope.excelRes = data;

    	//console.log($scope.excelRes);
		$scope.noOfRecords = data.length;
    	$scope.lastRecord = $scope.excelRes[$scope.excelRes.length-1];
    	console.log($scope.lastRecord);
    	if($scope.lastRecord.Do_we_Have_PASE_this_week == "Yes"){
    		$scope.hidePase = false;
    		$scope.showPase = true;
    	}
    	else{
    		$scope.hidePase = true;
    		$scope.showPase = false;
    	}
	};
});




// Open Meeting Controllers
myApp.controller('createOpenCtrl', function($scope){
	$scope.welcomeMsg = "Creating Open Meeting Page";
	$scope.comingSoon = "Coming Soon";
	
});
myApp.controller('viewOpenCtrl', function($scope){

	$scope.welcomeMsg = "View Open Meeting Schedule";
	$scope.comingSoon = "Coming Soon";

	$scope.openMeetingScheduleSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1sKxqjQBs2KcbjTJp_LIAPDrkT-1_9rmQh4SDseFYwJg/pubhtml?gid=675865039&single=true';
	$scope.excelRes, $scope.lastRecord, $scope.noOfRecords;
	$scope.showCheck = false;
	
	$scope.loadOpenMeetingDataUsingAngularJS = function() {
		Tabletop.init( { key: this.openMeetingScheduleSpreadsheetUrl,
                     callback: this.showOpenMeetingInfo,
                     simpleSheet: true } );
		$scope.showCheck = true;
	};

	$scope.showOpenMeetingInfo = function(data, tabletop){
		console.log('Successfully Open Meeting Data Loaded !!');
    	$scope.excelOpenMeetingRes = data;

    	//console.log($scope.excelRes);
		$scope.openMeetingNoOfRecords = data.length;
    	$scope.openMeetingLastRecord = $scope.excelOpenMeetingRes[$scope.excelOpenMeetingRes.length-1];
    	console.log($scope.openMeetingLastRecord);
    	
	};



	
});



//Events Details





























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

