var topPosition = 50;
var leftPosition = 0;

var ball = document.getElementById('ball')
ball.style.position = "absolute"

setInterval("ballMove()", 100)

function ballMove(){
  ball.style.left = leftPosition+"px"
  ball.style.top = topPosition+"px"

  topPosition +=5
  leftPosition +=15

  if (leftPosition >= window.innerWidth - 750) {
    topPosition = 50;
    leftPosition = 0;
  }

}