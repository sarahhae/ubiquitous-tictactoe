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
let drawCount = 0;

$(document).ready( function () {

  // ---------------------RESET BUTTON FUNCTIONS----------------------//

  $('#playgame').on('click', function () {
    $('.box').removeClass('X O').empty();
    $('#main-gameboard').on('click').toggleClass('flip-board');
    click = 0;
    winningPlayer = undefined;
  });

  $('#newgame').on('click', function () {
    $('.box').removeClass('X O').empty();
    $('#main-gameboard').toggleClass('flip-board');
    $('#player1').css({'backgroundColor': 'black', 'color': 'white'});
    $('#player2').css({'backgroundColor': 'black', 'color': 'white'});
    $('#player1-score').html(`Player 1 : 0`);
    $('#player2-score').html(`Player 2 : 0`);
    $('#noplayer-score').html(`Draw : 0`);
    click = 0;
    winningPlayer = undefined;
  });

  // -----------------WINNING MESSAGE---------------//
  //
  // let player1count = 0;
  // const player1win = function () {
  //   $('.player1win').addClass('show');
  //   $('.box').addClass('X');
  //   player1count += 1
  //   $('#player1-score').text(player1count);
  //   $('.box').unbind();
  //
  //   $('.player1win').on('click', function (){
  //     $('.player1win').removeClass('show');
  //     $('.box').removeClass('X');
  //     //call reset function ie reset();
  //   });
  //   return true;
  // };
  //
  // let player2count = 0;
  // const player2win = function () {
  //   $('.player2win').addClass('show');
  //   $('.box').addClass('O');
  //   player1count += 1
  //   $('#player2-score').text(player1count);
  //   $('.box').unbind();
  //
  //   $('.player2win').on('click', function (){
  //     $('.player2win').removeClass('show');
  //     $('.box').removeClass('O');
  //     //call reset function ie reset();
  //   });
  //   return true;
  // };
  //

  // ---------------------SCOREBOARD COUNTER------------------------//

  const scoreBoard = function ( score ) {
    let player1Wins = $('#player1-score')
    let player2Wins = $('#player2-score')
    let drawCount = $('#noplayer-score')
    if ( score === 'X' ) {
      player1Wins.html(`Player 1 : ${player1count}`)
    } else if ( score === 'O' ) {
      player2Wins.html(`Player 2 : ${player2count}`)
    }
  };

  // -----------------------BOARDGAME FUNCTION----------------------//

  $( ".box" ).on( 'click', function () {
    if (!$(this).hasClass('X') && !$(this).hasClass('O') && winningPlayer === undefined ) {
      click++ // adding each time a click has been made
      console.log(click);
      if ( click >= 9 ) {
        let draw = $('#noplayer-score')
        drawCount += 1;
        draw.html(`Draw : ${drawCount}`)
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

  // -----------------------WINNING COMBINATION----------------------//

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
