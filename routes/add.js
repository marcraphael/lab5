var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var addJSON = new Object();
	addJSON.name = request.query.name;
	addJSON.description = request.query.description;
	addJSON.imageURL = "http://lorempixel.com/400/400/people";
	console.log(addJSON);
	data.friends.push(addJSON);

	response.render('index', data);
 }