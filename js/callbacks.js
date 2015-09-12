
var main = function(){
	$('#output').append("<p>starting...</p>");

	// setTimeout is a javascript function for delayed execution
	// of commands. In the first example, we built the function right into
	// setTimeout (anonymous function). In this version, the anonymous
	// function is broken out into its own named function.
	var myTimer = window.setTimeout(writeEnding, 100);

	function writeEnding(){
		$('#output').append("<p>ending!</p>");
	}

	$('#output').append("<p>continuing...</p>");

	// Now use our own callback

	getData('http://fakedomain1234.com/userlist', writeData)
	
	$('#output2').append("<p>show this first...</p>");
	
	function getData(dataURI, callback){
		var timer = setTimeout(function(){
			var dataArray = [123, 456, 789, 012];
			callback(dataArray);
		}, 3000);
	}
	function writeData(myData){
		$('#output2').append("<p>" + myData + "</p>");
	}

	$('#output2').append("<p>show this next, even though it's last...</p>");

}

$(document).ready(main);