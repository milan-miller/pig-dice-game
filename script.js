'use strict';

// Selected Elements
const diceImage = document.querySelector('.dice');
const instructionsBtn = document.querySelector('.instructions-btn');
const modalBtn = document.querySelector('.modal-btn');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const storeScoreBtn = document.querySelector('.btn--store');
const p1TotalScore = document.getElementById('score--1');
const p2TotalScore = document.getElementById('score--2');
const currentScoreP1 = document.getElementById('current--1');
const currentScoreP2 = document.getElementById('current--2');
const p1Active = document.querySelector('.p1--active');
const p2Active = document.querySelector('.p2--active');

// Initial States
let playerScores = {
	p1: 0,
	p2: 0,
};

let currentScore = 0;
let activePlayer = 1;
let playing = true;
diceImage.classList.add('hidden');

// Functions
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

const toggleModal = () => {
	document.querySelector('.modal-background').classList.toggle('hidden');
	document.getElementById('instructions-modal').classList.toggle('modal');
	document.getElementById('instructions-modal').classList.toggle('hidden');
};

// Event Listeners
rollDiceBtn.addEventListener('click', () => {
	if (playing) {
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
	}
});

storeScoreBtn.addEventListener('click', () => {
	if (playing) {
		playerScores[`p${activePlayer}`] += currentScore;

		document.getElementById(`score--${activePlayer}`).textContent =
			playerScores[`p${activePlayer}`];

		diceImage.classList.add('hidden');

		if (playerScores[`p${activePlayer}`] >= 100) {
			playing = false;
			document
				.getElementById(`p${activePlayer}--crown`)
				.classList.remove('hidden');
			document
				.querySelector(`.p${activePlayer}--active`)
				.classList.add('hidden');
		} else {
			switchActivePlayer();
		}
	}
});

newGameBtn.addEventListener('click', () => {
	// Remove winners crown
	document.getElementById(`p${activePlayer}--crown`).classList.add('hidden');

	// Reset all initial values
	playerScores = {
		p1: 0,
		p2: 0,
	};

	currentScore = 0;
	playing = true;
	diceImage.classList.add('hidden');
	activePlayer = activePlayer === 1 ? 2 : 1;

	p1TotalScore.textContent = 0;
	p2TotalScore.textContent = 0;
	currentScoreP1.textContent = 0;
	currentScoreP2.textContent = 0;

	// Let the losing player have the first turn
	document
		.querySelector(`.p${activePlayer}--active`)
		.classList.remove('hidden');
});

instructionsBtn.addEventListener('click', () => {
	toggleModal();
});

modalBtn.addEventListener('click', () => {
	toggleModal();
});

document.addEventListener('keydown', (event) => {
	if (
		event.key === 'Escape' &&
		!document.getElementById('instructions-modal').classList.contains('hidden')
	) {
		toggleModal();
	}
});
