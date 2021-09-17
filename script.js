'use strict';

const currencyOneEl = document.getElementById('currency-one');
const amountOneEl = document.getElementById('amount-one');
const currencyTwoEl = document.getElementById('currency-two');
const amountTwoEl = document.getElementById('amount-two');

const calculate = function(){
	const currencyOne = currencyOneEl.value;
	const currencyTwo = currencyTwoEl.value;

	const url = `https://open.er-api.com/v6/latest/${currencyOne}`;
	console.log(url)
	fetch(url) .then((res) => res.json()) .then((data) => {const rate = data.rates[currencyTwo];
	amountTwoEl.value = (amountOneEl.value * rate).toFixed(2)})
	// console.log(currencyOne, currencyTwo)
}
currencyOneEl.addEventListener('change',calculate);
amountOneEl.addEventListener('input',calculate);
currencyTwoEl.addEventListener('change',calculate);
amountTwoEl.addEventListener('input',calculate);

calculate()