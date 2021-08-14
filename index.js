var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceValue1 = "images/dice".concat(randomNumber1, ".png");
document.querySelectorAll("img")[0].setAttribute("src", diceValue1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceValue2 = "images/dice".concat(randomNumber2, ".png");
document.querySelectorAll("img")[1].setAttribute("src" , diceValue2);

if (diceValue1 == diceValue2){
    document.querySelector("h1").innerHTML = "Draw!"
} else if (diceValue1 > diceValue2){
    document.querySelector("h1").innerHTML = "Player 1 Won!"
} else if (diceValue1 < diceValue2){
    document.querySelector("h1").innerHTML = "Player 2 Won!"
}