
// Pseudo Code
// There will be four crystals displayed as buttons on the page. Each Crystal will have a hidden value between 1-12
// The player will be shown a random number at the start of the game. The randome number should be between 19-120

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.



// Variables
var randomResult;
var lost = 0;
var win = 0;
var counter = 0;

// Game Starts

var resetStart = function(){

	// Clear out crystals of previous numbers
	$(".crystals").empty();

	// Images

	var images = ['assets/images/triangle.png','assets/images/teardrop.png',
				'assets/images/triangle.png','assets/images/teardrop.png'];
	

	// Function for radndom number being between 19-120
	
	randomResult = Math.floor(Math.random()* 102) +19;
	
	// check to make sure result is correct
	
	console.log(randomResult);

	// Random result appears
	
	$("#result").html('Random Result:' + randomResult);

		// Forloop
		
		for (var i = 0; i < 4; i++) {

		// Random number var for crystals
		
		var random= Math.floor(Math.random ()* 11) + 1;
		
		// Check to make sure var is working
		
		console.log(random);

		// Function for random numbers to be generated for crystals
		
		var crystal = $("<div>");
		crystal.attr({"class":'crystal', 
			"data-random": random
		});
		

		crystal.css({

			"background-image":"url('" + images[i] + "')",
			"background-size":"cover"
	});

		$(".crystals").append(crystal);
	
	}

	$("#counter").html("Total Score: " + counter);

}

resetStart();



// Event delegation

$(document).on('click',".crystal",function(){

// Click event for crystals 

 var num = parseInt($(this).attr('data-random'));

 // Adds numbers to previously selected crystals

counter += num;

$("#counter").html("Total Score: " + counter);

console.log(counter);

// If lose 

if(counter>randomResult){

	console.log("You Lost!");

	lost++;

	$("#lost").html("Losses: " + lost);

	counter = 0;


	resetStart();

}

// If Win
else if(counter===randomResult){

console.log("You Win!!");

win++;

$("#win").html("Wins: " + win);


counter = 0;


resetStart();

}


});













