'use strict';
let selectedLic = document.querySelector('.selected-plan__lic')
let inputs = document.querySelectorAll('.radio__input')
let count = document.querySelector('.count__select')
let totalValue = document.querySelector('.total__value')
let form = document.querySelector('.form')
let totalSum = 0
let counter = 1
let inputValue = 0

inputs.forEach(input => {
    input.addEventListener('click', e => {
        selectedLic.innerText = e.target.id
        inputValue = e.target.value
        calcSum()
    })
})

count.addEventListener('click', e => {
    counter = e.target.value
    calcSum()
})

function calcSum() {
    totalSum = counter * inputValue
    return totalValue.innerText = `$${totalSum}`
}
form.addEventListener('submit', e => {
    e.preventDefault()
    totalSum ? alert('Purchase was successful') : alert('Make a choice of service')
})