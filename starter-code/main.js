console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var thing=document.getElementById("game-board");
function createCards() {
	var i=0
for (i=0; i<=3; i++){
	var newCard = document.createElement("div");
		newCard.className="card";
		thing.appendChild(newCard);
	}		
}
/*if (cardOne!==cardThree) {
	alert("Sorry, try again...");
} else
	alert("You found a match!");
if (cardTwo!==cardThree) {
	alert("Sorry, try again...")
} 
if (cardOne===cardTwo) {
	alert("You found a match!!");
} else 
	alert("Sorry, try again...")
if (cardThree===cardFour) {
	alert("You found a match!!");
} else 
	alert("Sorry, try again...")*/
