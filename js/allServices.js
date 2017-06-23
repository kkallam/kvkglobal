myApp.factory('viewOpenService', function(){
	
	var viewOpenService = {};
	
	viewOpenService.publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BAhYHLwF7qoOdtTDozlaIIie6iT5b3O3you8M_8LqqI/pubhtml?gid=524430781&single=true';
	
	viewOpenService.loadDataUsingAngularJS = function() {
		Tabletop.init( { key: this.publicSpreadsheetUrl,
                     callback: this.showInfo,
                     simpleSheet: true } );
	};

	viewOpenService.showInfo = function(data, tabletop){
		console.log('Successfully processed!');
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

	return viewOpenService;

});