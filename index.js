numSquares = 6;
var colors = generateRandomColor(numSquares);
var chosenColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = chosenColor;

resetButton.addEventListener("click", function(){
  reset();
});

for(var i=0; i<modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent === "Easy")
      numSquares = 3;
    else
      numSquares = 6;
    reset();
  });
}

for(var i=0; i<colors.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === chosenColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent="Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else{
      messageDisplay.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }
  });
}

function reset(){
  colors = generateRandomColor(numSquares);
  chosenColor = pickColor();
  colorDisplay.textContent = chosenColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  for(var i=0; i<squares.length; i++)
  if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
  else
    squares[i].style.display = "none";
  h1.style.backgroundColor = "steelblue";
}

function changeColors(color){
  for(var i=0; i<squares.length; i++)
    squares[i].style.backgroundColor = color;
}

function generateRandomColor(num){
  var arr = [];
  for(var i=0; i<num; i++)
    arr.push(randomColors());
  return arr;
}

function randomColors(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}
