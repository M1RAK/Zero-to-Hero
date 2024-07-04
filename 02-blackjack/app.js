// Create Player Object
const player = {
	name: 'Per',
	chips: 200
}

//  Initialize cards [], sum, hasBlackJack, isAlive, message.
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''

// Grab all DOM elements
let cardsEl = document.querySelector('#cards-el')
let sumEl = document.querySelector('#sum-el')
let messageEl = document.querySelector('#message-el')
let playerEl = document.querySelector('#player-el')

// create getRandomCard function
function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1
	if (randomCard === 1) {
		return 11
	} else if (randomCard > 10) {
		return 10
	} else {
		return randomCard
	}
}

// create startGame function
function startGame() {
	isAlive = true
	// Initialize first and second card
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()

	cards.push(firstCard, secondCard)
	sum = firstCard + secondCard
	renderGame()
}

// create renderGame function
function renderGame() {
	cardsEl.textContent = 'Cards: '
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += `${cards[i]} `
	}
	sumEl.textContent = 'Sum: ' + sum
	// Game Logic
	if (sum < 21) {
		message = `Would you like to draw another card ?`
	} else if (sum === 21) {
		hasBlackJack = true
		message = `You've got BlackJack.`
	} else {
		isAlive = false
		message = `You are out of the game!`
	}
	messageEl.textContent = message
}

// create newCard function
function newCard() {
	if (isAlive && !hasBlackJack) {
		let card = getRandomCard()
		cards.push(card)
		sum += card
		renderGame()
	}
}

// create resetGame function
function resetGame() {
	if (!isAlive || hasBlackJack) {
		sum = 0
		cards = []
		renderGame()
	}
}
