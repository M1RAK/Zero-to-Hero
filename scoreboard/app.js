let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

function addOne(team) {
	let home = Number(homeScore.textContent)
	let guest = Number(guestScore.textContent)

	if (team == 'H') {
		homeScore.textContent = home + 1
	} else {
		guestScore.textContent = guest + 1
	}
	highlightLeader()
}

function addTwo(team) {
	let home = Number(homeScore.textContent)
	let guest = Number(guestScore.textContent)

	if (team == 'H') {
		homeScore.textContent = home + 2
	} else {
		guestScore.textContent = guest + 2
	}
	highlightLeader()
}

function addThree(team) {
	let home = Number(homeScore.textContent)
	let guest = Number(guestScore.textContent)

	if (team == 'H') {
		homeScore.textContent = home + 3
	} else {
		guestScore.textContent = guest + 3
	}
	highlightLeader()
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
	}
}

function resetGame() {
	homeScore.textContent = 0
	guestScore.textContent = 0
	homeScore.classList.remove('highlight')
	guestScore.classList.remove('highlight')
}
