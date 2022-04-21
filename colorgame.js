var numsquares = 6;
var colors= generaterandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
    reset();

    });
}

function reset(){
    colors = generaterandomColors(numsquares);
    //pick a new random color from array
    pickedcolor = pickcolor();
    //change colordisplat to match picked color
    colorDisplay.textContent = pickedcolor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change color of squares
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
         squares[i].style.display = "block";
         squares[i].style.background = colors[i];
        } else{
        squares[i].style.display ="none";
        }
        
    }
    h1.style.background = "steelblue";

}

resetButton.addEventListener("click", function(){
    reset();
})

colorDisplay.textContent = pickedcolor;

for(var i=0; i<squares.length; i++)
{
    //add initial colors to squares
    squares[i].style.background = colors[i]

    //add click listeners to squres
    squares[i].addEventListener("click", function(){
        //grab color of clicked squares
        var clickedcolor = this.style.background;
         //compare color to pickedcolor
          console.log(clickedcolor, pickedcolor);
        if(clickedcolor === pickedcolor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedcolor);
            h1.style.background = clickedcolor;
        }else{
                this.style.background = "rgb(16, 19, 3)";
                messageDisplay.textContent = "Try Again"
            }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickcolor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generaterandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i=0; i<num; i++){
        //get random color and push into arr
        arr.push(randomcolor())
    }
    //return that array
    return arr;
}

function randomcolor(){
//pick a "red" from 0 -255
var r = Math.floor(Math.random() * 256)
//pick a "green" from 0 -255
var g = Math.floor(Math.random() * 256)
//pick a "blue" from 0 -255
var b = Math.floor(Math.random() * 256)
return "rgb(" + r + ", " + g + ", " + b + ")";
}
    
