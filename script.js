'use strict';

// Selecting elements
const score1Paragraph = document.getElementById('score--1');
const score2Paragraph = document.getElementById('score--2');
const diceImage = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const storeScoreBtn = document.querySelector('.btn--store');
const currentScoreP1 = document.getElementById('current--1');
const currentScoreP2 = document.getElementById('current--2');
const p1Active = document.querySelector('.p1--active');
const p2Active = document.querySelector('.p2--active');

const scores = {
	p1: 0,
	p2: 0,
};

let currentScore = 0;
let activePlayer = 1;

// Initial state
score1Paragraph.textContent = 0;
score2Paragraph.textContent = 0;
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
	}
});
