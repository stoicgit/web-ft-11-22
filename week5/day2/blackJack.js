const dealerHand = document.getElementById("dealer-hand");
const dealerPoints = document.getElementById("dealer-points")
const playerHand = document.getElementById("player-hand");
const playerPoints = document.getElementById("player-Points")
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
let deck = [];
let playerCards = [];
let dealersCards = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];


const makeDeck = () => {
    for(let suit of suits){
        for(let rank of ranks){   
            const card = {
            rank: rank,
            suit: suit,
            pointValue: rank > 10 ? 10 : rank,
            };
            deck.push(card);
        }
    }

};

function getPlayerHand (card) {
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    playerHand.append(cardImage)
}

function getDealerHand (card) {
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer() {
    let playerpairs = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs);
    let playerpairs2 = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs2);
    playerCards.push(playerpairs, playerpairs2);
//    playerPoints = calculatePoints(playerCards, playerCards.length);
 playerPoints.appened(playerPoints);

}

function dealDealer() {
    let dealerPairs = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs);
    let dealerPairs2 = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs2);
    playerCards.push(dealerPairs, dealerPairs2);
    dealerPoints =calculatePoints(dealersCards, dealersCards.length)
    dealerPoints.append(dealerPoints);
}

function dealHand () {
    dealPlayer()
    dealDealer();
}

function hit () {
    const hitSingle = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(hitSingle);
}

function stand () {
    const hitSingle2 = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(hitSingle2);
    if (playerHand > 21) {
        console.log("you bust")
    };
}

function calculatePoints (arr, size) {
    let sum = 0;
    for (let i=0; i<size;i++) {
        sum += arr[i].pointValue;
    }
    console.log(sum)
    return sum

}

function checkAce (card) {
    if (card[0] == "ace") {
        return 1;
}

}



window.addEventListener("DOMContentLoaded", () => {
    ////
});
makeDeck()
dealButton.addEventListener("click", dealHand)
hitButton.addEventListener("click", hit)
standButton.addEventListener("click", stand)

console.log(deck)