
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
  	$("#guessButton").click(function(){



  		//get value from text box
	  	var userGuessCount = 0
	  	var userGuess = $('#userGuess').val()
		//console.log(userGuess);
	  	//console.log(typeof(userGuess));
	  	//console.log(parseInt(userGuess));
	  	userGuess = parseInt(userGuess)
	  	//check value of input for validity (numeric btwn 1-100)
	  	checkUserGuess(userGuess); 
	  	//add value to guess list  ul#guessList
	  	$("#guessList").append("<li>"+userGuess+"</li>");
	  	//clear input field
	  	$('#userGuess').val('');
	  	//increase guess #count
	  	userGuessCount++;
	  	console.log(userGuessCount);
	  	$("#count").text(userGuessCount);
	  	

	 	/*--- provide feedback for guess ---*/
	  	//bin value of input into hot, warm, cold, frigid range
	  	//insert feedback into #feedback div

  	});

  	/*--- provide feedback for relative guess ---*/
  	//optional
  	
  	/*--- New game reset ---*/
  	$(".new").click(function(){
  		alert('new game!');
  		//newGame();
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

function newGame() {
	//reset the list of entered guesses
	//reset the feedback
	//reset the guess numbers to zero
	//reset the guess input box
	//generate a new random number
}


