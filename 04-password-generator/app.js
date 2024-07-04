const btnEl = document.querySelector('.generate-btn')
const outputOne = document.querySelector('.output.one')
const outputTwo = document.querySelector('.two')
const passwordLength = document.querySelector('.password-length')
const passwordNum = document.querySelector('.password-numbers')
const passwordSym = document.querySelector('.password-symbols')

let baseCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
]
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbols = [
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/'
]

function generatePasswords() {
	let characters = [...baseCharacters]
	if (passwordNum.checked) characters = characters.concat(numbers)
	if (passwordSym.checked) characters = characters.concat(symbols)

	let length =
		Number(passwordLength.value) > 6 ? Number(passwordLength.value) : 12
	if (length > 16) length = 16 // Limit length to a maximum of 16

	let password = ''
	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length)
		password += characters[randomIndex]
	}
	return password
}

function renderPasswords() {
	outputOne.textContent = generatePasswords()
	outputTwo.textContent = generatePasswords()
}

function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			alert('Password copied to clipboard')
		})
		.catch((err) => {
			console.error('Failed to copy: ', err)
		})
}

btnEl.addEventListener('click', renderPasswords)

outputOne.addEventListener('click', () => {
	copyToClipboard(outputOne.textContent)
})
outputTwo.addEventListener('click', () => {
	copyToClipboard(outputTwo.textContent)
})


