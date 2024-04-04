var topPosition = 50;
var leftPosition = 0;

var ball = document.getElementById('ball')
ball.style.position = "absolute"

var intervalID = setInterval("ballMove()", 500)

document.getElementById('ball').addEventListener('click', function(){
  document.getElementById('ball').src="explosion.webp"
  clearInterval(intervalID)
})

document.getElementById('slider').addEventListener("input", function() {
  console.log(document.getElementById('slider').value)
  speed = document.getElementById('slider').value

  clearInterval(intervalID)
  intervalID=setInterval("ballMove()", speed)
})

function ballMove(){
  ball.style.left = leftPosition+"px"
  ball.style.top = topPosition+"px"

  topPosition = Math.random() * (window.innerHeight - 200)
  leftPosition = Math.random() * (window.innerWidth - 200)
}