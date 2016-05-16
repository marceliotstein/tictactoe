/*
 * t3.js
 */

/* global variables */

var activeGrid = [null,null,null,null,null,null,null,null,null];
var activePlayer = "X";
var numFilled = 0; 
var winner = false;
var winningCombos = [[0,1,2],
                     [3,4,5],
                     [6,7,8],
                     [0,3,6],
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]];

/* about function */

function about() {
  alert("some stuff");
}

/* reset function */

function newGame() {
  activeGrid = [null,null,null,null,null,null,null,null,null];
  boxes = document.getElementsByClassName('t3box');
  for (i=0; i<boxes.length; i++) {
    boxes[i].innerHTML = "&nbsp;";
    boxes[i].className = boxes[i].className.replace(' t3winner','');
  }
  numFilled = 0;
  activePlayer = "X";
  result = document.getElementById('result');
  result.innerHTML = ""; 
}

/* determine if the current grid has a winner and declare accordingly */

function findWinner() {
  winner = null;
  for (i=0; i<winningCombos.length; i++) {
    b0 = activeGrid[winningCombos[i][0]];
    if (b0!=null) {
      if ((b0==activeGrid[winningCombos[i][1]]) &&
          (b0==activeGrid[winningCombos[i][2]])) {
        winner = b0;
        b1 = activeGrid[winningCombos[i][1]];
        b2 = activeGrid[winningCombos[i][2]];
        boxes = document.getElementsByClassName('t3box');
        boxes[winningCombos[i][0]].className += ' t3winner';
        boxes[winningCombos[i][1]].className += ' t3winner';
        boxes[winningCombos[i][2]].className += ' t3winner';
        result = document.getElementById('result');
        result.innerHTML = "The winner is " + winner;
      }
    }
  }
  return winner;
}
  
boxes = document.getElementsByClassName('t3box');
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
      if (activePlayer=="X") {
        activePlayer = "O";
      } else if (activePlayer=="O") {
        activePlayer = "X";
      }
      numFilled++;
      winner = findWinner();
      if (winner==null) {
        if (numFilled==9) {
          alert("This game is finished");
        }
      }
    } else {
      alert("This space is occupied");
    }
  }
}

