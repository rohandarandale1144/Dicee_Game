//let randomNumber1=prompt("Enter any number between 1-6: ");
let randomNumber1=Math.floor(Math.random()*6) + 1;

let randomNumberImage="dice"+randomNumber1+".png";

let randomImageSource="/Project1/Dicee Challenge - Starting Files/images/"+randomNumberImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//For Image 2
let randomNumber2=Math.floor(Math.random()*6) + 1;

let randomNumberImage2="dice"+randomNumber2+".png";

let randomImageSource2="/Project1/Dicee Challenge - Starting Files/images/"+randomNumberImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//Decide Winner

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 WIN!!🏆";
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML="Its a TIE!!";
}
else
{
    document.querySelector("h1").innerHTML="Player2 WIN!!🏆";
}