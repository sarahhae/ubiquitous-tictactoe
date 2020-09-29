// player 1 wins message.
// player 2: wins message.
// draw message.
// scoreboard function. Goes up by 1 every time a player wins or the 'draw'
// score goes up by 1 once every turn is drawn.
// board function: 9 boxes. Random picks. once clicked, return X or O.
// Winning conditions. First up to 10 wins the whole game.
// Three buttons for "Start Game", "Play Again", New Game.


const players = {
  firstPlayer: 1,
  secondPlayer: 2,
}

// const clearGame = function () {
//   if ( $('*.board')on.('click', function () === true )
//   // pop up message with button to restart / play.
// }

$(document).ready( function () {
clearBoard();
let turn = 0;



// GAME FUNCTION = get the board running first. Once clicked on a box, add the players icon ( X or O ).
// function is : when a 'player' chooses a box out of 9, return ( X or O ). Give a class to the boxes chosen by each player.

const player1 = function () {
  $('#player1').addClass('cross');
  $('.box').addClass('active');
  })
}


// WINNING COMBO : PLAYER 1
const checkWinner = function () {
  let winner;

let winningCombo = { // 3 row win, 3 columns win, 2 diagonal win.
  win1: $('#1, #2, #3').length === 3, // first row across
  win2: $('#4, #5, #6').length === 3, // second row across
  win3: $('#7, #8, #9').length === 3, // third row across
  win4: $('#1, #4, #7').length === 3, // first row down
  win5: $('#2, #5, #7').length === 3, // second row down
  win6: $('#3, #6, #9').length === 3, // third row down
  win7: $('#1, #5, #9').length === 3, // cross from #1 to #9
  win8: $('#3, #5, #7').length === 3, // cross from #3 to #7
}
console.log(winningCombo);

// if player 1 has any of the winning combinations on the board, player 1 wins.
// if player 2 has any of the winning combinations on the board, player 2 wins.

let draw = (board === 9) && (!$('#player1')) && (!$('#player2'));
console.log(draw);





// player 2: wins message.
// draw message.
// player 1 wins message.


});
