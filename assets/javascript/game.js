
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

	var images = [
	'https://www.google.com/search?q=crystals&tbm=isch&tbs=rimg:CduxWobUcQU2IjgvlOgANRLEu21iJqIRQqUKt5X4V6Kqp9hk80rjtjLq9Y9yciBC8hmMfYcfLTgwTkQK8TAOsMLSqioSCS-U6AA1EsS7EYh9tSXd-k6LKhIJbWImohFCpQoR9jwfufyqgwAqEgm3lfhXoqqn2BGxE2HNn9QxryoSCWTzSuO2Mur1Ed6XmSn5o7ZzKhIJj3JyIELyGYwR7GA_1To120mIqEgl9hx8tODBORBE9FQqexC0iNSoSCQrxMA6wwtKqEWoTxtpA5_1CQ&tbo=u&sa=X&ved=0ahUKEwj0vN_hy_PXAhXORN8KHV5TDhoQ9C8IHw&biw=1008&bih=837&dpr=2#imgdii=iOYORUmtS32FcM:&imgrc=t5X4V6Kqp9hLsM:',
	'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmbch.guide%2Fwp-content%2Fuploads%2Fcrystal_drstrange.png&imgrefurl=https%3A%2F%2Fmbch.guide%2Fcrystalls%2Fspisok-imeyushhixsya-kristallov%2F&docid=lNFR0QR6_n4-BM&tbnid=j3JyIELyGYynLM%3A&vet=10ahUKEwjQht2kzPPXAhWr5YMKHSiFBjoQMwj3ASgFMAU..i&w=256&h=256&bih=837&biw=1008&q=crystals&ved=0ahUKEwjQht2kzPPXAhWr5YMKHSiFBjoQMwj3ASgFMAU&iact=mrc&uact=8#h=256&imgdii=2OfKnCaygv23NM:&vet=10ahUKEwjQht2kzPPXAhWr5YMKHSiFBjoQMwj3ASgFMAU..i&w=256',
	'https://www.google.com/search?q=crystals&tbm=isch&tbs=rimg:CbeV-FeiqqfYIjibnre0EnN17S-U6AA1EsS7_11KNMqO0NaOI5g5FSa1LfVnr3XZppfLtqEpTXMIJvDpKUB0V-Z323ioSCZuet7QSc3XtEV4O_1qg8qX8MKhIJL5ToADUSxLsRiH21Jd36TosqEgn_1Uo0yo7Q1oxGE4kXF8nz_1XCoSCYjmDkVJrUt9ERiMehlCqdeMKhIJWevddmml8u0RIkXXdao10P8qEgmoSlNcwgm8OhG7gQ3MtzeT5CoSCUpQHRX5nfbeEfunAHaWfIfz&tbo=u&sa=X&ved=0ahUKEwiZj_HTzPPXAhUDleAKHRsUCoIQ9C8IHw&biw=1008&bih=837&dpr=2#imgrc=t5X4V6Kqp9hLsM:',
	'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmarvel-contestofchampions%2Fimages%2F8%2F8d%2FDaily_Crystal.png%2Frevision%2Flatest%2Fscale-to-width-down%2F200%3Fcb%3D20150825213624&imgrefurl=http%3A%2F%2Fmarvel-contestofchampions.wikia.com%2Fwiki%2FCrystal&docid=i2Gj1moBX8McdM&tbnid=E7aBEveuCPds_M%3A&vet=10ahUKEwjQht2kzPPXAhWr5YMKHSiFBjoQMwj9ASgLMAs..i&w=200&h=200&bih=837&biw=1008&q=crystals&ved=0ahUKEwjQht2kzPPXAhWr5YMKHSiFBjoQMwj9ASgLMAs&iact=mrc&uact=8#h=200&imgdii=mAU6sKeCzfXJwM:&vet=10ahUKEwjQht2kzPPXAhWr5YMKHSiFBjoQMwj9ASgLMAs..i&w=200']

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













