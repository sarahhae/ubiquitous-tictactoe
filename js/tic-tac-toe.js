// player 1 wins message.
// player 2: wins message.
// draw message.
// scoreboard function. Goes up by 1 every time a player wins or the 'draw'
// score goes up by 1 once every turn is drawn.
// board function: 9 boxes. Random picks. once clicked, return X or O.
// Winning conditions. First up to 10 wins the whole game.
// Three buttons for "Start Game", "Play Again", New Game.
// player 2: wins message.
// draw message.
// player 1 wins message.

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

// GAME FUNCTION = get the board running first. Once clicked on a box, add the players icon ( X or O ).
// function is : when a 'player' chooses a box out of 9, return ( X or O ). Give a class to the boxes chosen by each player.
let turn = 1;
// let firstPlayer = $('#player1');
// let secondPlayer = $('#player2');
let newGame = 0;


$(document).ready( function () {
  let turn = 1;
  let click = 0; // click variable to count click numbers
  let newGame = 0;

  $( ".box" ).one( 'click', function () { // added 'one' and works but can not restart or refresh the board. Make function. .unbind()?
    click++ // calling call funtion each time a click has been made
    if ( turn === 1 ) {
      console.log("player 1");
      turn = 2;
      $(this).addClass('X').text('X');
      checkWinner("X");
    } else {
      console.log("player 2");
      turn = 1;
      $(this).addClass('O').text('O');
      checkWinner("O");
    }
  });

  // WINNING COMBO : PLAYER 1
  const checkWinner = function (symbol) {

    if ($('#1').hasClass(symbol) &&
    $('#2').hasClass(symbol) &&
    $('#3').hasClass(symbol)) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#4').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#6').hasClass(symbol)) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#7').hasClass(symbol) &&
    $('#8').hasClass(symbol) &&
    $('#9').hasClass(symbol)) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#1').hasClass(symbol) &&
    $('#4').hasClass(symbol) &&
    $('#7').hasClass(symbol)) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#2').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#8').hasClass(symbol) ) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#3').hasClass(symbol) &&
    $('#6').hasClass(symbol) &&
    $('#9').hasClass(symbol) ) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#1').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#9').hasClass(symbol) ) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#3').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#7').hasClass(symbol) ) {
      console.log(`Player ${symbol} wins!`);
      return true;

    } else {
      if ( click >= 9 ) {
        console.log(`It's a draw!`)
      }
      return false;
    }
  };



const restartGame = function ( restart ) {
  newGame++;
$( ".box" ).one( 'click', function () {
  if ( click >= 9 ) {
    $(this).unbind($(`button.newgame`));
  }
})
}



});
