/*Javascript for memeory card game*/
function randomizeCards() {
	table = document.querySelector("#table");
	cardCount = table.children.length; //gets number of child elements.

	for (c = 0; c < cardCount; c++) {
		randomNumber = Math.floor(Math.random() * cardCount); // random whole number 1-10
		cardMoved = table.children[randomNumber];
		table.appendChild(cardMoved);
	}
} //randomizes cards

function checkWin() {
	cardsRemovedList = document.getElementsByClassName("remove"); // finds all cards with removed
	cardsRemoved = cardsRemovedList.length; //counts cards that have been removed
	console.log(cardsRemoved);
	if (cardsRemoved == 10) {
		document.querySelector("#gameMessage h1").innerHTML = "You Win! Congrats";
	}
} //checks to see if game has ended

function removeMatch(card1, card2) {
	Pause = setTimeout(function() {
		card1.classList.add("remove");
		card2.classList.add("remove");
		card1.classList.remove("clicked");
		card2.classList.remove("clicked");
		cardsClicked = 0;
		document.querySelector("#gameMessage h1").innerHTML = "Nice job! keep going";
		checkWin();
	}, 1000);
} // removes cards that match

function flipCards(card1, card2) {
	pause = setTimeout(function() {
		card1.classList.remove("clicked");
		card2.classList.remove("clicked");
		cardsClicked = 0;
		document.querySelector("#gameMessage h1").innerHTML = "Oops! Try again";
	}, 1000);
} // flips cards that donn't match

function cardClicked(what) {
	if (what.classList.contains("remove")) {}
	if (what.classList.contains("clicked")) {
		what.classList.remove("clicked");
		cardsClicked--;
	} else {
		what.classList.add("clicked");
		cardsClicked++;
		if (cardsClicked >= 2) {
			cardCheck();
		}
	}
} //toggles front and back of card 

function cardCheck(cardsClicked) {

	clickedCards = document.getElementsByClassName("clicked");

	matched = false;
	if (clickedCards[0].classList.contains("image1") && clickedCards[1].classList.contains("image1") ||
		clickedCards[0].classList.contains("image2") && clickedCards[1].classList.contains("image2") ||
		clickedCards[0].classList.contains("image3") && clickedCards[1].classList.contains("image3") ||
		clickedCards[0].classList.contains("image4") && clickedCards[1].classList.contains("image4") ||
		clickedCards[0].classList.contains("image5") && clickedCards[1].classList.contains("image5")) {
		//compares classes of first and second clicked cards
		matched = true;
	} else {
		matched = false;
	}
	if (matched) {
		removeMatch(clickedCards[0], clickedCards[1]);
	} else {
		flipCards(clickedCards[0], clickedCards[1]);
	}
} //function to check if cards match

window.onload = function() {

	randomizeCards(); //call to function

	cardList = document.getElementsByClassName("card");

	cardCount = cardList.length; //finds how many cards are on the table

	cardsClicked = 0; // card tracker

	for (c = 0; c < cardCount; c++) {

		cardList[c].onclick = function() {
			cardClicked(this);
		}
	} //flips cards for number of cards 

}