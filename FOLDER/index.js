var randomNumber1=Math.ceil(Math.random()*6);
var randomImage1="image/"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);
var randomNumber2=Math.ceil(Math.random()*6);
var randomImage2="image/"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="draw!!";
}
