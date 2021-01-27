var random1 = Math.floor((Math.random() * 6) + 1);
var random2 = Math.floor((Math.random() * 6) + 1);

var path1 = "images/dice" + random1 + ".png";
var path2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", path1);

document.querySelectorAll("img")[1].setAttribute("src", path2);

if(random1 > random2)
{
  document.querySelector("H1").innerHTML = "🚩 Player 1 Wins!";
} else if(random1 < random2)
{
  document.querySelector("H1").innerHTML = "Player 2 Wins! 🚩";
} else{
  document.querySelector("H1").innerHTML = "Draw";
}
