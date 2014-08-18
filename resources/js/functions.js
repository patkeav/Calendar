var identityList = [];
// for events loaded within the DOM:	
$(document).ready(function() {
//	var showMainContent = function() {
//		$("#name-controller").show();
//	};
	$("#user-name.form-control").keyup(function() {
		$("#name-controller").show();
	});
	$("input.options-checkbox").click(function() {
		console.log("working");
		$("#name-controller").show();
	});
	

});

// for events loaded outside of the DOM: 
$(document).on("click", function(event) {	
	
	});
	
	

/**helper method for handling click events and showing/hiding elements
	@param input = the element value
	@param default_text = the default element value
	@param element = the element to target
**/	
	
	function showHide(input, default_text, element) {
		if ($(element).is(":visible")) {
			$(element).hide();
			$(input).val(default_text);
		}
		else {
			$(element).show();
			$(input).val("Return");
		}
	}
		
/**helper method for checking if field is empty
	@param id = the field to be checked
**/		
	function checkField(id) {
		var field = '#' + id;
		var field_parent = '#' + $(field).parent().attr('id');
		if ($(field).val()) {
			$(field_parent + ' .red-alert').hide();
			$(field_parent + ' #submit').hide();
			return true;
		}
		else {
			$(field_parent + ' .red-alert').fadeIn();
			return false;
		}
	}
		
/**helper method for getting the data detail
	@param link = the link to go to
	@param location_div = the div to put the result into
**/			
		
	function displayDataDetail(link, location_div) {
		var url = link;
		$.ajax({
			url: url,
			success: function(response) {
				$(location_div).html(response);
			}
		}).done(function() {
			$(location_div).delay(5000).fadeIn();
		});
	}	

/**helper method for creating the table buttons 		
	@param location_div = the div to put the result into
**/	
			
	function displayTableButtons(location_div) {
		$.ajax({
			url: 'resources/ajax_includes/table_buttons.php',
			success: function(response) {
				$(location_div).html(response);
			}
		}).done(function() {
			$(location_div).delay(5000).fadeIn();
		});
	}
	
/**helper method for creating the data stream relative to parameters terms box
	@param params = the parameters to search the DB for
	@param location_div = the div to put the result into
**/					
		
	function displayDataParams(params, location_div) {
		$.ajax({
			url: 'resources/db_files/query_db_params.php',
			type: 'POST',
			data: {params: params},
			success: function(response){ 
					$(location_div).html(response);
					console.log(response);
					},
			error: function(response){alert("Error Displaying Data." + response);}
		}).done(function() {
			var data_outputs = [];
			$(location_div).children().each(function() {
				$(this).removeClass('hidden');
			});
		});
	}
	
/**helper method for taking out each element in an array and recursively fading them in 
	@param link = the link to go to
	@param location_div = the div to put the result into
**/		

	function loadData(display_location, finder) {	
		var data_outputs = [];
		$(display_location).on("find", function(finder) {
			$(finder).children().each(function() {
				data_outputs.push(this);	
			});
		});
		return data_outputs;
		//fadeAllIn(data_outputs);
	}
	 
/**helper method for taking out each element in an array and recursively fading them in **/

	function fadeAllIn(children) {
		var current = children.shift();
		$(current).fadeIn(1000, function() {
			fadeAllIn(children);
		});
	}
	
/** helper method for matching the nearest table row with the button clicked
	@param value = the value to search
	@param location = the location to search (the data table)
**/	
	
	function getNearest(value, location_div) {
			$(location_div).not(value).addClass('hidden');
			$(location_div + value).parent().closest('tr').find('td').not('.skip').removeClass('hidden');
	}
	
/**helper method for checking the Database for new entries
	@param location = the location to output the data to
	@param date = date of last entry
**/			
		
	function checkDB(location_div, date) {
		var last_location = location_div + " table tbody";
		date = ($("input#last_entry").val());
		$.ajax({
			url: 'resources/db_files/check_db.php',
			type: "POST",
			data: {date: date},
			success: function(response) { 
				$(last_location).prepend(response);
			}
		}).done(function() {
			var last_entry = $(location_div + " table tbody tr td.time-stamp").first(); 
			$("#last_entry").val(last_entry.html());
			//alert($(last_location + ' tr').first().find('td').not('.time-stamp').html());
			$(last_location + ' tr').first().fadeIn();
		});
	}
	
/**helper method for deleting rows **/			
		
	function deleteRow(row_id) {
		$.ajax({
			url: 'resources/ajax_includes/delete_row.php',
			data: { id: row_id }, 
			success: function(response) {
				alert(response);
			},
			error: function(response){
				alert("Error Deleting Row " + response);
			}
		}).done(function() {
		});
	}

