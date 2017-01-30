console.log("JS file is connected to HTML! Woo!")
/*This is what we'll use to check matches*/
var cards = ["queen", "queen", "king", "king"];
/*This will show which cards people have clicked*/
var cardsInPlay = [];
/*This creates the actual board*/
var thing=document.getElementById("game-board");
/*This function creates the cards and assigns them either queen or king*/
/*The backbone for this program was largely inspired by this website and developer: https://jsbin.com/liqeyem/edit?js,output
Looks like someone from GA posted this solution online. Worry not, I only used this to check my work.*/
function createBoard(){
for (var i=0; i<cards.length; i++){
	var newCard = document.createElement("div");
		newCard.className="card";
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards)
		thing.appendChild(newCard);
	}		
}
function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==="queen"){
		this.innerHTML="<img src='http://imgur.com/U4mnxZ5.jpg'>"
	}
	else {
		this.innerHTML="<img src='http://imgur.com/vtOwttl.jpg'>"
	}
	if (cardsInPlay.length===2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
function isMatch (cards){
	if (cards[0]===cards[1]){
		alert("You found a match!!!")
	}
	else {
		alert("Sorry, try again...")
	}
}
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

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
