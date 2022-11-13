/*Javascript for memeory card game*/

window.onload = function(){
  
  cardList = document.getElementsByClassName("card");
  
  cardCount = cardList.length; //finds how many cards are on the table
  
  cardsClicked = 0; // card tracker
  
  function cardClicked(what) {
    //toggles front and back of card 
    if(what.classList.contains("clicked")){
        what.classList.remove("clicked");
        cardsClicked--;
       }
    else{
      what.classList.add("clicked");
      cardsClicked++;
       if (cardsClicked === 2){ 
          cardCheck();
       }
    }
  }
  
 function cardCheck(cardsClicked){
   //function to check if cards match
   clickedCards = document.getElementsByClassName("clicked");
   
   matched = false;
   if (clickedCards[0].classList == clickedCards[1].classList){
     //compares classes of first and second clicked cards
     matched = true;
   }
   else {
     matched =false;
   }
   if (matched){
     
     removeMatch();
   }
   else{
     flipCards()
   }
}
  
  for (c = 0; c < cardCount; c++) {
    //flips cards for number of cards 
    cardList[c].onclick = function(){
      cardClicked(this);
    }  
  }
}