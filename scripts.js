/*Javascript for memeory card game*/

window.onload = function(){
  
  cardList = document.getElementsByClassName("card");
  
  cardCount = cardList.length; //finds how many cards are on the table
  
  for (c = 0; c < cardCount; c++) {
    
    cardList[c].onclick = function(){
      this.classList.toggle("clicked");
    }
  }
 
}