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

// GAME FUNCTION = get the board running first. Once clicked on a box, add the players icon ( X or O ).
// function is : when a 'player' chooses a box out of 9, return ( X or O ). Give a class to the boxes chosen by each player.
let turn = 1;
let gameCount = 0;
let click = 0;
let winningPlayer;
let player1count = 0;
let player2count = 0;
let noWin = 0;

$(document).ready( function () {

  $('#playgame').on('click', function () {
    $('.box').removeClass('X O').empty();
    $('#main-gameboard').on('click').addClass('flip-board');
  });

  //  new game / restart game function
  $('#playgame').on('click', function () {
    $('.box').removeClass('X O').empty();
    $('#main-gameboard').on('click').addClass('flip-board');
    click = 0;
    winningPlayer = undefined;
  });

  $('#newgame').on('click', function () {
    $('.box').removeClass('X O').empty();
    $('#main-gameboard').on('click').addClass('flip-board');
  });

  $('#newgame').on('click', function () {
    $('.box').removeClass('X O').empty();
    $('#main-gameboard').on('click').addClass('flip-board');
    click = 0;
    winningPlayer = undefined;
  });

  // scoreboard counter
  const scoreBoard = function ( score ) {
    let player1Wins = $('#player1-score')
    let player2Wins = $('#player2-score')
    let noWin = $('#noplayer-score')
    if ( score === 'X' ) {
      player1Wins.html(`Player 1 : ${player1count}`)
    } else if ( score === 'O' ) {
      player2Wins.html(`Player 2 : ${player2count}`)
    }
  };

  // -----------------------WORKING CODES BELOW----------------------//

  $( ".box" ).on( 'click', function () {
    if (!$(this).hasClass('X') && !$(this).hasClass('O') && winningPlayer === undefined ) {
      click++ // adding each time a click has been made
      console.log(click);
      if ( click >= 9 ) {
        let drawCount = $('#noplayer-score')
        noWin += 1;
        drawCount.html(`Draw : ${noWin}`)
      }
      if ( turn === 1 ) {
        console.log("player 1");
        turn = 2;
        $(this).addClass('X').text('X');
        $('#player1').css({'backgroundColor': 'lightgreen', 'color': 'white'});
        $('#player2').css({'backgroundColor': 'black', 'color': 'white'});
        checkWinner("X");
      } else {
        console.log("player 2");
        turn = 1;
        $(this).addClass('O').text('O');
        $('#player2').css({'backgroundColor': 'lightgreen', 'color': 'white'});
        $('#player1').css({'backgroundColor': 'black', 'color': 'white'});
        checkWinner("O");
      }
    }
  });

  // WINNING COMBINATION
  const checkWinner = function ( symbol ) {

    if ($('#1').hasClass(symbol) &&
    $('#2').hasClass(symbol) &&
    $('#3').hasClass(symbol)) {
      winningPlayer = `${symbol}`;
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#4').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#6').hasClass(symbol)) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#7').hasClass(symbol) &&
    $('#8').hasClass(symbol) &&
    $('#9').hasClass(symbol)) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#1').hasClass(symbol) &&
    $('#4').hasClass(symbol) &&
    $('#7').hasClass(symbol)) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#2').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#8').hasClass(symbol) ) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#3').hasClass(symbol) &&
    $('#6').hasClass(symbol) &&
    $('#9').hasClass(symbol) ) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#1').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#9').hasClass(symbol) ) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else if ($('#3').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#7').hasClass(symbol) ) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X')
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }

      console.log(`Player ${symbol} wins!`);
      return true;

    } else {
      if ( click >= 9 ) {
        console.log(`It's a draw!`)
      }
      return false;
    }
  };
});
