'use strict';

// Selecting elements
const diceImage = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const storeScoreBtn = document.querySelector('.btn--store');
const currentScoreP1 = document.getElementById('current--1');
const currentScoreP2 = document.getElementById('current--2');
const p1Active = document.querySelector('.p1--active');
const p2Active = document.querySelector('.p2--active');

const playerScores = {
	p1: 0,
	p2: 0,
};

let currentScore = 0;
let activePlayer = 1;

const switchActivePlayer = () => {
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent =
		currentScore;

	activePlayer = activePlayer === 1 ? 2 : 1;

	if (activePlayer === 2) {
		p1Active.classList.toggle('hidden');
		p2Active.classList.toggle('hidden');
	} else {
		p2Active.classList.toggle('hidden');
		p1Active.classList.toggle('hidden');
	}
};

// Initial state
diceImage.classList.add('hidden');

rollDiceBtn.addEventListener('click', () => {
	const randomNmb = Math.trunc(Math.random() * 6) + 1;

	diceImage.classList.remove('hidden');
	diceImage.src = `assets/dice-${randomNmb}.png`;

	if (randomNmb !== 1) {
		currentScore += randomNmb;
		document.getElementById(`current--${activePlayer}`).textContent =
			currentScore;
	} else {
		switchActivePlayer();
	}
});

storeScoreBtn.addEventListener('click', () => {
	playerScores[`p${activePlayer}`] += currentScore;

	document.getElementById(`score--${activePlayer}`).textContent =
		playerScores[`p${activePlayer}`];

	if (playerScores[`p${activePlayer}`] >= 100) {
		console.log(`Player ${activePlayer} won!`);
	}

	diceImage.classList.add('hidden');

	switchActivePlayer();
});
