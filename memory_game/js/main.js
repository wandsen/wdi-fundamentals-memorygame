console.log("Up and running!");

cards = ["queen", "queen", "king", "king"];

cardsInPlay = [];

cardOne = cards[0];


cardsInPlay.push(cardOne);
console.log("User flipped queen")

cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped King")

if (cardsInPlay.length >= 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match");
	}

	else {
		alert("Sorry, try again.");
	}
}