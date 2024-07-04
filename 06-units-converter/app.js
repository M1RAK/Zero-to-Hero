const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')

const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')

function convertUnits() {
	let unit = Number(inputEl.value)
	let feet = unit * 3.281
	let meters = unit / 3.281
	let gallons = unit * 0.264
	let liters = unit / 0.264
	let kilograms = unit / 2.204
	let pounds = unit * 2.204

	lengthEl.innerHTML = `<h3>Length (Meter/Feet)</h3>
                <span>${unit} meters = ${feet.toFixed(3)} feet</span>
                                <span class="divider"></span>
                             <span>${unit} feet = ${meters.toFixed(
		3
	)} meters</span>`

	volumeEl.innerHTML = `<h3>Volume (Liters/Gallons)</h3>
                <span>${unit} liters = ${gallons.toFixed(3)} gallons</span>
                                <span class="divider"></span>
                             <span>${unit} gallons = ${liters.toFixed(
		3
	)} liters</span>`

	massEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
                <span>${unit} Kilos = ${pounds.toFixed(3)} pounds</span>
                                <span class="divider"></span>
                             <span>${unit} pounds = ${kilograms.toFixed(
		3
	)} Kilos</span>`
}

convertBtn.addEventListener('click', () => {
	convertUnits()
})
