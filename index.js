var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImages = "dice"+ randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImages);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImages2 = "dice"+ randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImages2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "🎊Play 1 Win";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🎊Play 2 Win";

}
else{
    document.querySelector("h1").innerHTML = "DRAW!";
}
