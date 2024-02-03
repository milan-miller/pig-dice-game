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

let currentScore = 0;

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
		currentScoreP1.textContent = currentScore;
	} else {
		currentScore = 0;
		currentScoreP1.textContent = currentScore;
	}
});
