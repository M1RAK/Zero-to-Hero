// Input Elements
const textArea = document.getElementById('endorsment-input')
const inputFrom = document.getElementById('input-from')
const outputTo = document.getElementById('output-to')
const publishBtn = document.getElementById('publish-btn')

// Output Elements
const outputList = document.querySelector('.output-container')

let endorsments = []
let likes = 0

function updateLikes(message, value) {
	endorsments.forEach((endorsment) => {
		if (endorsment.text == message.trim()) {
			endorsment.likes += value
		}
	})
	console.log(endorsments)

	renderEndorsment()
}

function postEndorsment() {
	if (inputFrom.value == '' || outputTo.value == '' || textArea.value == '') {
		console.error('Please fill all the information')
	} else {
		let message = {
			id: endorsments.length < 0 ? 1 : endorsments.length + 1,
			from: inputFrom.value,
			to: outputTo.value,
			text: textArea.value,
			likes: likes
		}
		endorsments.push(message)
		renderEndorsment()
		resetForm()
	}
}

function renderEndorsment() {
	let outputMessage = ''
	endorsments.forEach((message) => {
		outputMessage += `
                        <div id="output-el">
                            <b class="output-to">To ${message.to}</b>
                            <p class='text'>
                            ${message.text}
                            </p>
                           <div class="output-bottom">
						<b class="output-from">From ${message.from}</b>
						<span class="heart">
							<img
							class="heart-btn"
								src="./assets/heart-solid.svg"
								alt="heart-solid" />
							${message.likes}
						</span>
					</div>
				        </div>`
	})
	outputList.innerHTML = outputMessage
}

function resetForm() {
	inputFrom.value = ''
	outputTo.value = ''
	textArea.value = ''
}

publishBtn.addEventListener('click', (e) => {
	e.preventDefault()
	postEndorsment()
})

outputList.addEventListener('click', (e) => {
	let message = ''
	if (e.target.classList.contains('heart-btn')) {
		let output = e.target.parentElement.parentElement.parentElement
		message = output.querySelector('.text').textContent
	}

	updateLikes(message, +1)
})

outputList.addEventListener('dblclick', (e) => {
	let message = ''
	if (e.target.classList.contains('heart-btn')) {
		let output = e.target.parentElement.parentElement.parentElement
		message = output.querySelector('.text').textContent
	}

	updateLikes(message, -1)
})
