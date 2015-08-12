
$(document).ready(function(){
	
  	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//generate a random number between 1-100
  	var answer=getRandomInt(1, 101)
  	console.log('the answer is: '+answer); 
  	

  	/*--- make a guess ---*/
  	$("#guessButton").click(function(e){
  		e.preventDefault();
	  	var userGuess = $('#userGuess').val()
	  	userGuess = parseInt(userGuess)
	  	checkUserGuess(userGuess); 

	  	//add value to guess list  ul#guessList
	  	$("#guessList").append("<li>"+userGuess+"</li>");

	  	//increase guess #count
	  	
	  	var userGuessCount = $('#guessList li').length;
	  	console.log(userGuessCount);
	  	$("#count").text(userGuessCount);


	  	//clear input field
	  	$('#userGuess').val('');
	  	

	 	/*--- provide feedback for guess ---*/

	 	var userLastGuess=$('#guessList li:nth-last-child(2)').text()
	 	userLastGuess=parseInt(userLastGuess)
	 	var howClose=(Math.abs(userLastGuess-answer));
	 	console.log(userLastGuess);
	 	console.log(howClose);

	 	if (userGuessCount <= 1) {
	 		userGuessFeedback(userGuess, answer);
	 	}

	 	if (userGuessCount %2 == 0) {
	 		userGuessFeedback(userGuess, answer);
	 	}

	 	else {
	 		userNextGuessFeedback(howClose, userGuess, answer);
	 	}


  	});

  	/*--- provide feedback for relative guess ---*/
  	//optional
  	
  	/*--- New game reset ---*/
  	$(".new").click(function(){
  		answer=newGame();
  	});

});



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkUserGuess(guess) {
	if (guess > 100 || guess < 1) {
		alert('Please enter a number between 1 and 100');
	}
	else if (isNaN(guess)) {
		alert('Only numbers can be entered, please try again');
	}

	else {
		return guess;
	}	
}


function userGuessFeedback(userGuess, answer) {

	 	console.log(Math.abs(userGuess-answer));

	 	if (Math.abs(userGuess-answer)>50) {
	 		$('#feedback').text('Brr, frigid');
	 	}

	 	else if (Math.abs(userGuess-answer)<=50 && Math.abs(userGuess-answer)>30) {
	 		$('#feedback').text('Cold');
	 	}

	 	else if (Math.abs(userGuess-answer)<=30 && Math.abs(userGuess-answer)>10) {
	 		$('#feedback').text('Warm');
	 	}

	 	else if (Math.abs(userGuess-answer)<=10 && Math.abs(userGuess-answer)>=1) {
	 		$('#feedback').text('Hot');
	 	}

	 	else if (Math.abs(userGuess-answer) == 0) {
	 		$('#feedback').text('You win!');
	 	}

}


function userNextGuessFeedback (howClose, userGuess, answer) {
		console.log(Math.abs(userGuess-answer));

		if (Math.abs(userGuess-answer)>howClose) {
			$('#feedback').text('Getting colder...');
		}

		else if (Math.abs(userGuess-answer)<howClose) {
			$('#feedback').text('Getting hotter...');
		}

}

function newGame() {
	$("#guessList").children().remove();
	$('#feedback').text('Make your Guess!');
	$("#count").text('0');
	var answer=getRandomInt(1, 101)
  	console.log('the answer is: '+answer); 
  	return answer;
}
