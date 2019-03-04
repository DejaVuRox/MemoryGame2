var card = document.querySelectorAll(".card");
var cardsDeck = [...card];
var deck = document.querySelector('.deck');
var restart = document.querySelector('.restart');
var moves = document.querySelector('.moves');
var counterMoves = 0;
var flipCards = [];
var matchCards = [];


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function init() {
  startPlay();
  openCard();
}

function startPlay(){
    // shuffle deck
    cards = shuffle(cardsDeck);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
      //deck returns empty string
        deck.innerHTML = "";
        // each card is called to go to the empty array by function
        [].forEach.call(cards, function (item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
  }


//Flips the cards
function openCard(){
card.forEach(function(e){
  e.addEventListener("click", function(){
    moves.textContent++;
    counterMoves ++;
    flipCards.push(this);
      for (var i = 0; i < card.length; i++) {
        card[i].classList.remove('open','show');
        this.classList.add('open','show');
        //compare only if two cards are selected
        if(counterMoves === 2) {
          if(flipCards[0].type === flipCards[1].type && flipCards[0] !== flipCards[1]) {
              matching();
            }
            else {
              notMatching();
            }
          }
        }
    });
  });
}


function matching(){
    flipCards[0].classList.add('open','match');
    flipCards[1].classList.add('open','match');
    matchCards.push(flipCards);
    matchCards.disable = true;
    counterMoves = 0;
    flipCards = [];
      setTimeout(function(){
        if (matchCards.length == 8) {
      alert("Welldone");
      }
    }, 100);
  }


function notMatching(){
counterMoves = 1;
flipCards.shift();
flipCards.splice(2);
  }


// Resets
restart.addEventListener('click', function(){
  startPlay();
  moves.textContent = 0;
  matchCards = [];
});

init();




/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
