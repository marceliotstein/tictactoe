/*
 * t3.js
 */

/* define game board */

var playerOne = "X";
var playerTwo = "O";
var numBoxes = 9;
var activeGrid = new Array();
var winningCombos = [[0,1,2],
                     [3,4,5],
                     [6,7,8],
                     [0,3,6],
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]];

/* text strings */

var winnerMessage = " Wins!";
var noWinnerMessage = "Nobody Wins.";
var aboutThisExercise = "About This Exercise";
var returnToGame = "Return To Game";

/* element selectors */

var about = document.getElementById('t3about');
var board = document.getElementById('t3board');
var result = document.getElementById('result');
var aboutButton = document.getElementById('aboutButton');
var boxes = document.getElementsByClassName('t3box');

/* toggle "about" text which shares space with game board */

function toggleAbout() {
  if (about.style.display == 'none') {
    board.style.display = 'none';
    about.style.display = 'block';
    aboutButton.value = returnToGame;
  } else {
    board.style.display = 'block';
    about.style.display = 'none';
    aboutButton.value = aboutThisExercise;
  }
}

/* initialize board for new game */

function newGame() {
  for (i=0; i<boxes.length; i++) {
    activeGrid[i] = null;
    boxes[i].innerHTML = "&nbsp;";
    boxes[i].className = boxes[i].className.replace(' t3winner','');
  }
  numFilled = 0;
  activePlayer = playerOne;
  result.innerHTML = ""; 
  about.style.display = 'none';
  board.style.display = 'block';
}

/* determine if the game has ended and declare accordingly */

function reviewMove() {
  winner = null;
  for (i=0; i<winningCombos.length; i++) {
    b0 = activeGrid[winningCombos[i][0]];
    if (b0!=null) {
      if ((b0==activeGrid[winningCombos[i][1]]) &&
          (b0==activeGrid[winningCombos[i][2]])) {
        winner = b0;
        b1 = activeGrid[winningCombos[i][1]];
        b2 = activeGrid[winningCombos[i][2]];
        boxes[winningCombos[i][0]].className += ' t3winner';
        boxes[winningCombos[i][1]].className += ' t3winner';
        boxes[winningCombos[i][2]].className += ' t3winner';
        result.innerHTML = winner + winnerMessage;
      }
    }
  }
  if (!winner) {
    if (numFilled==numBoxes) {
      result.innerHTML = noWinnerMessage;
    }
  }
  return winner;
}
  
/* create event handler for each box in grid */

for (i=0; i<boxes.length; i++) {
  boxes[i].onclick=function(){
    if (this.id=="box1") {
      b = 0;
    } else if (this.id=="box2") {
      b = 1;
    } else if (this.id=="box3") {
      b = 2;
    } else if (this.id=="box4") {
      b = 3;
    } else if (this.id=="box5") {
      b = 4;
    } else if (this.id=="box6") {
      b = 5;
    } else if (this.id=="box7") {
      b = 6;
    } else if (this.id=="box8") {
      b = 7;
    } else if (this.id=="box9") {
      b = 8;
    } 
    if (activeGrid[b]==null) {
      activeGrid[b] = activePlayer; 
      this.innerHTML = activePlayer;
      if (activePlayer==playerOne) {
        activePlayer = playerTwo;
      } else if (activePlayer==playerTwo) {
        activePlayer = playerOne;
      }
      numFilled++;
      reviewMove();
    }
  }
}

/* begin initial game */

newGame();
