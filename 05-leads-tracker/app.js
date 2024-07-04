inputEl = document.getElementById('input-el')
saveBtn = document.getElementById('save-btn')
tabBtn = document.getElementById('tab-btn')
deleteBtn = document.getElementById('delete-btn')
ulEl = document.getElementById('ul-el')

let myLeads = []
let savedLeads = JSON.parse(localStorage.getItem('myLeads'))

if (savedLeads) {
	myLeads = savedLeads
	render(myLeads)
}

function render(leads) {
	let leadsList = ''
	leads.forEach((lead) => {
		leadsList += `<li><a>${lead}</a></li>`
	})
	ulEl.innerHTML = leadsList
}

tabBtn.addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url)
		localStorage.setItem('myLeads', JSON.stringify(myLeads))
		render(myLeads)
	})
})

saveBtn.addEventListener('click', () => {
	if (inputEl.value !== '') {
		myLeads.push(inputEl.value)
	}
	inputEl.value = ''
	localStorage.setItem('myLeads', JSON.stringify(myLeads))
	render(myLeads)
})

deleteBtn.addEventListener('dblclick', () => {
	myLeads = []
	localStorage.removeItem('myLeads')
	render(myLeads)
})
