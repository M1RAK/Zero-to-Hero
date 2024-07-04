let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

function updateScore(team, score) {
	let home = Number(homeScore.textContent)
	let guest = Number(guestScore.textContent)

	if (team === 'H') {
		homeScore.textContent = home + score
	} else if (team === 'G') {
		guestScore.textContent = guest + score
	} else {
		console.error('Error Updating Score...')
	}

	highlightLeader()
}
function addOne(team) {
	updateScore(team, 1)
}

function addTwo(team) {
	updateScore(team, 2)
}

function addThree(team) {
	updateScore(team, 3)
}

function highlightLeader() {
	let home = Number(homeScore.textContent)
	let guest = Number(guestScore.textContent)

	if (home > guest) {
		homeScore.classList.add('highlight')
		guestScore.classList.remove('highlight')
	} else if (guest > home) {
		guestScore.classList.add('highlight')
		homeScore.classList.remove('highlight')
	} else {
		homeScore.classList.remove('highlight')
		guestScore.classList.remove('highlight')
	}
}

function resetGame() {
	homeScore.textContent = 0
	guestScore.textContent = 0
	homeScore.classList.remove('highlight')
	guestScore.classList.remove('highlight')
}
