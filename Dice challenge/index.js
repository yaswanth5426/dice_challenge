var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomimg="images/"+"dice"+ randomNumber1 + ".png";
var randomNumber11=Math.floor(Math.random() * 6)+1;
var randomimg1="images/"+"dice"+ randomNumber11 + ".png";

var myvar=document.querySelectorAll("img")[0];
var myvar1=document.querySelectorAll("img")[1]
myvar.setAttribute("src",randomimg);
myvar1.setAttribute("src",randomimg1);
if(randomNumber1>randomNumber11){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player1 wins"
}
else{
    
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player2 wins"
  
}
