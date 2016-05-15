/*
 * t3.js
 */

var activegrid = [null,null,null,null,null,null,null,null,null];
var activeplayer = "X";

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
    if (activegrid[b]==null) {
      activegrid[b] = activeplayer; 
      this.innerHTML = activeplayer;
      if (activeplayer=="X") {
        activeplayer = "O";
      } else if (activeplayer=="O") {
        activeplayer = "X";
      }
    } else {
      alert("This space is occupied");
    }
  }
}

