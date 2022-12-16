const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button")
const hitButton = document.getElementById("hit-button")
const standButton = document.getElementById("stand-button")
const deck = [];
const playerCards = [];
const dealersCards = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const makeDeck = (rank, suit) => {
    const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
    };
    deck.push(card);
};

function getPlayerHand (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    playerHand.append(cardImage)
}

function getDealerHand (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer() {
    const playerpairs = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs);
    const playerpairs2 = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs2);
    playerCards.push(playerpairs, playerpairs2);


}

function dealDealer() {
    const dealerPairs = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs);
    const dealerPairs2 = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs2);
    playerCards.push(dealerPairs, dealerPairs2);
}

function dealHand () {
    dealPlayer();
    dealDealer();
}



for (let suit of suits) {
    for (const rank of ranks) {
    makeDeck(rank, suit);
}
};


window.addEventListener("DOMContentLoaded", () => {
    ////
});

dealButton.addEventListener("click", dealHand)
hitButton.addEventListener("click", )
standButton.addEventListener("click", )

console.log(deck)

erHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button")
const hitButton = document.getElementById("hit-button")
const standButton = document.getElementById("stand-button")
const deck = [];
const playerCards = [];
const dealersCards = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const makeDeck = (rank, suit) => {
    const card = {
    rank: rank,


function getDealerHand (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer() {
    const playerpairs = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs);
    const playerpairs2 = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs2);
    playerCards.push(playerpairs, playerpairs2);


}

function dealDealer() {
    const dealerPairs = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs);
    const dealerPairs2 = deck[Math.floor(Math.random()*deck.length)];




function getDealerHand (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer() {
    const playerpairs = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs);
    const playerpairs2 = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs2);
    playerCards.push(playerpairs, playerpairs2);


}

function dealDealer() {
    const dealerPairs = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs);
    const dealerPairs2 = deck[Math.floor(Math.random()*deck.length)];




function getDealerHand (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer() {
    const playerpairs = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs);
    const playerpairs2 = deck[Math.floor(Math.random()*deck.length)];
    getPlayerHand(playerpairs2);
    playerCards.push(playerpairs, playerpairs2);


}

function dealDealer() {
    const dealerPairs = deck[Math.floor(Math.random()*deck.length)];
    getDealerHand(dealerPairs);
    const dealerPairs2 = deck[Math.floor(Math.random()*deck.length)];