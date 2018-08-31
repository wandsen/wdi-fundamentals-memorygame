console.log("Up and running!");

var cards = [

	{rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"},

	{rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"},

	{rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"},

	{rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"}
];

var cardsInPlay = [];



var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");

	} 

	else {
	console.log("Sorry, try again.");
	}
};




//This function flips the card
var flipCard = function(){

	var cardId = this.getAttribute("data-id");
	console.log(cardId);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}

	
}


//This function creates the board
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');

		cardElement.setAttribute("src", "images/back.png");
		
		cardElement.setAttribute("data-id", i);
		
		cardElement.addEventListener("click", flipCard);
		
		document.getElementById('game-board').appendChild(cardElement);


	}
};

createBoard();


//attempts to create a reset button
var resetButton = document.getElementById("button1");
		
resetButton.addEventListener("click", resetGame);

var resetGame = function(){
		for (i = 0; i < cardsInPlay.length; i++){
			cardsInPlay[i].setAttribute("src", "images/back.png");

		}
		
}

















