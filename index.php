<?php /** The main index page **/ ?>
<!DOCTYPE html>
<html lang="en" ng-app="calendar">
	<head>
		<link href="resources/css/style.css" rel="stylesheet" type="text/css" />
		<link href='resources/css/bootstrap/css/bootstrap.css' rel='stylesheet' />
		<link href='resources/css/bootstrap/css/bootstrap-theme.min.css' rel='stylesheet' />
		<title> Calendar </title>
	</head>
	<body ng-controller="nameController">
		<div class="container-fluid">
			<div class="row-fluid">
				<div id="header" class="page-header">
					<h1 class="jumbotron" align="center">
						Calendar Application
					</h1>
				</div><!--/#header.page-header-->
			</div><!--/.row-fluid-->
			<div class="row-fluid">
				<div id="content" class="col-lg-6 col-lg-offset-3">
					<div class="input-group ">
						<span class="input-group-addon">							
							My name is 
						</span>
						<input type="text" id="user-name" class="form-control" ng-model="name" />
					</div><!--/.input-group-->
					<div class="input-group">
						<span class="input-group-addon">
							and I am:
						</span>
						<div class="options-list" ng-controller="optionsListController">
								<span class="input-group-addon" ng-repeat="option in options"  >
									<input type="checkbox" 
										class="options-checkbox"
										name="{{option.shortname}}" 
										ng-model="identity"
										ng-change="swapValue('{{option.title}}')" />
										 {{option.title}}
								</span>
						</div><!--/.options-list-->
					</div><!--/.input-group-->
				</div><!--/#content.col-lg-6-->
			</div><!--/.row-fluid-->
			<div class="row-fluid">
				<div class="col-lg-8 col-lg-offset-2">
					<div id="name-controller" class="user-name" ng-controller="identityListController" >
						<h1>{{ name }}'s Calendar for 2014</h1>
						<h2> You are 
							<span ng-repeat="thing in identityList">{{ thing }}, </span>
						</h2>
					</div><!--/#name-controller-->
				</div><!--/.col-lg-12-->
			</div><!--/.row-fluid-->
		</div><!--/.container-fluid-->
	</body>
	<script src="resources/js/google-ajax.min.js" type="text/javascript"></script>
	<script src="resources/js/google-ajax-10.min.js" type="text/javascript"></script>
	<script src="resources/js/jquery-ui.min.js" type="text/javascript"></script>
	<script src="resources/js/google-js-api.min.js" type="text/javascript"></script>
	<script src='resources/js/bootstrap.min.js'></script>
	<script src="resources/lib/angular/angular.js"></script>
	<script src="resources/js/functions.js"></script>
	<script src="resources/js/app.js"></script>
	<script src="resources/js/services.js"></script>
	<script src="resources/js/controllers.js"></script>
	<script src="resources/js/filters.js"></script>
	<script src="resources/js/directives.js"></script>
</html>
