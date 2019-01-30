//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){
    //Create new function that uses cityPop as a parameter
    
    $('tr').each(function(i){
        //loop through each element with 'tr' as the tag

    	if (i == 0){

            $(this).append('<th>City Size</th>');
            //fixed spelling of append so method works properly
			//This will refer to the selecting the current iterating element
			//This is used for the row of index 0 to add the header
    	} else {

			var citySize;
			//The variable of citySize is created as an empty container

    		if (cityPop[i-1].population < 100000){
				citySize = 'Small';
				//If the city population is less than the condition, then it is assigned 'Small'

    		} else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
				//Fixed capitalization, so variable is recognized
				//If the city population is less than the condition, then it is assigned 'mmedium'


    		} else {
				citySize = 'Large';
				//If the city does not meet the other conditions, it is assigned large
			};
			
			$(this).append('<td>' + citySize + '</td>');
			//Need parenthesis around 'this' so that the selector is in proper syntax
			//Also, missing part of the tag for <td
        };
      
        
        
    	
    });
};

function addEvents(){
    //Create a new function for adding events in the browser

	$('table').mouseover(function(){
		//Use the element table and not the id to select it as it was created above
		
		var color = "rgb(";

		for (var i=0; i<3; i++){
			//Creates a for loop that will run three times

			var random = Math.round(Math.random() * 255);
			//assigns a random value to the variable random that is an integer using the round method

            color += random;
            //Remove quotes so that the variable random is returned and not the string 'random'

			if (i<2){
				color += ",";
				//will add a comma if there are less than three color numbers now
			
			} else {
				color += ")";
				//will close the RGB if it is hte last number
		};

		$(this).css('color', color);
		//This refers to the table and will change the style css of color
        };
        //Needed another set of braces
    });
    //This syntax is used for an anonymous function

	function clickMe(){
        //Use camel case for the function
		alert('Hey, you clicked me!');
		//creates alert saying that you clicked me
	};

    $('table').on('click', clickMe);
    //Adds the event listener 
    
    
};

//call the initialize function when the document has loaded
$(document).ready(initialize);