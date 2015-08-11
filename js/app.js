
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	
  	/*--- generate a random number between 1-100 ---*/


  	/*--- make a guess ---*/
  	//get value from text box
  	//check value of input for validity
  	//parse value into an integer 
  	//add value to guess list 

 	/*--- provide feedback ---*/
  	//bin value of input into hot, warm, cold, frigid range
  	//insert feedback into feedback div

  	
  	/*--- New game reset ---*/
  	$(".new").click(function(){
  		alert('new game!');
  		//newGame();
  	});

});

function newGame () {
	//reset the list of entered guesses
	//reset the feedback
	//reset the guess numbers to zero
	//reset the guess input box
	//generate a new random number
}


