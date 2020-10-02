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
    $('#main-gameboard').on('click').toggleClass('flip-board'); // .toggleClass for continuous flips one button is clicked.
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

  // ---------------------SCOREBOARD COUNTER------------------------//

  const scoreBoard = function ( score ) {
    let player1Wins = $('#player1-score');
    let player2Wins = $('#player2-score');
    let drawCount = $('#noplayer-score');

    if ( score === 'X' ) {
      player1Wins.html(`Player 1 : ${player1count}`);

    } else if ( score === 'O' ) {
      player2Wins.html(`Player 2 : ${player2count}`);
    }
  };

  // -----------------------BOARDGAME FUNCTION----------------------//

  $( ".box" ).on( 'click', function () {
    if (!$(this).hasClass('X') && !$(this).hasClass('O') && winningPlayer === undefined ) { // checks if a box is vacant, if not, places their marker in it and check for win or draw.
      click++ // Adding player clicks

      if ( click >= 9 ) {
        let draw = $('#noplayer-score')
        drawCount += 1;
        draw.html(`Draw : ${drawCount}`)
      }

      if ( turn === 1 ) {
        turn = 2;
        $(this).addClass('X').text('X');
        $('#player1').css({'backgroundColor': 'lightgreen', 'color': 'white'});
        $('#player2').css({'backgroundColor': 'black', 'color': 'white'});
        checkWinner("X");

      } else {
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
        scoreBoard('X');
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }
      return true;

    } else if ($('#4').hasClass(symbol) &&
    $('#5').hasClass(symbol) &&
    $('#6').hasClass(symbol)) {
      winningPlayer = `${symbol}`
      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X');
      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }
      return true;

    } else if ($('#7').hasClass(symbol) &&
    $('#8').hasClass(symbol) &&
    $('#9').hasClass(symbol)) {
      winningPlayer = `${symbol}`

      if ( symbol === 'X' ) {
        player1count += 1;
        scoreBoard('X');

      } else if ( symbol === 'O' ) {
        player2count += 1;
        scoreBoard('O');
      }
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
      return true;

    } else {
      if ( click >= 9 ) {
      }
      return false;
    }
  };
});
