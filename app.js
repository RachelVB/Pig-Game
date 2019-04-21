/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. 
After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

***********************************************************************************************/

let scores = [0, 0];
let roundScore = 0;

// The active player will be our Player 1 and the player with a value of 1 will be our second player.
let activePlayer = 0;

// Add active indicator to the panel of the starting player
document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')

let dice = Math.floor(Math.random() * 6) + 1;

//IMPORTANT: Written this way, it acts like a SETTER.
//document.querySelector('#current-' + activePlayer).textContent = dice;
/* Text content can only set Plain text and not HTML.
By using innerHTML, we can set HTML properties like '<em>' '</em>'. 
Otherwise the result would show up with errors in plain text. 
*/

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

/* You can write you code this way to test your code out.
The result will be stored and read in your browser console.
By storing it as a variable, we can reuse this selector over and over, 
without re-typing it out.
*/
//IMPORTANT: Written this way, it acts like a GETTER.
let x = document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


function btn() {
  //Do something here
}
/*
By using a comma after the 'click' event, we are allowing only the event listener
to call this function. Not when we save our code. 

Alternativly, instead of having it call a function that we've already written, 
We can write our function within our event listener.
This is called an anonymous function and it cannot be reused. 
*/
document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function() {

  // First: We need a random Number.
  let dice = Math.floor(Math.random() * 6) + 1;

  // Second: Display the result.
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';


  // Third: Update the round score only if the rolled number was not a 1.
  if (dice !== 1) {
    //Add Score
    roundScore += dice;
    // This would be the other way of writing our 'RoundScore' -roundScore = roundScore + dice;-
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //This code above allows us to add our score to our current total. 
  } else {
    //Next Player
    nextPlayer();
    /*
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    //ABOVE: We need to set the roundscore back to 0 when the player reaches a number 1 dice roll.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    /*ABOVE: When the dice reaches a 0, the current total should return a 0. 
    The player there loses all their points if they roll a number 1 on the dice. 
    */
    // document.querySelector('.player-0-panel').classList.remove('active');
    //ABOVE: This is how we remove a class from an HTML element.
    // document.querySelector('.player-1-panel').classList.add('active');
    //ABOVE: This is how we add a class to an HTML element.
    /* In this instance, we've commented this code out because 
    we will be replacing it with more optimized code. 
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    */
  }

});


/* This event listener will allow us to use the HOLD button */
document.querySelector('.btn-hold').addEventListener('click', function () {
  // Add current score to the players global score. 
  scores[activePlayer] += roundScore;
  /* ABOVE: We wante to update the scores array with what the active player has 
  in their current score. Another way of writing this code?
  scores[activePlayer] = scores[activePlayer] + roundScore 
  */

  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  /* This allows us to update the global score with the current active player */

  // Check if the player won the game

  // Next Player
  nextPlayer();

});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}