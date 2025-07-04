let scorePlayer0, scorePlayer1, currentScore, activePlayer, playing;

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

function init() {
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

function switchPlayer() {
  document.getElementById(current--${activePlayer}).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = "C:/Users/devas/OneDrive/Pictures/dice.webp"; // Use dice-1.png to dice-6.png for dynamic images if needed

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(current--${activePlayer}).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    switch (activePlayer) {
      case 0:
        scorePlayer0 += currentScore;
        score0El.textContent = scorePlayer0;

        if (scorePlayer0 >= 100) {
          playing = false;
          diceEl.classList.add('hidden');
          player0El.classList.add('player--winner');
          player0El.classList.remove('player--active');
        } else {
          switchPlayer();
        }
        break;

      case 1:
        scorePlayer1 += currentScore;
        score1El.textContent = scorePlayer1;

        if (scorePlayer1 >= 100) {
          playing = false;
          diceEl.classList.add('hidden');
          player1El.classList.add('player--winner');
          player1El.classList.remove('player--active');
        } else {
          switchPlayer();
        }
        break;
    }
  }
});

btnNew.addEventListener('click', init);

// Start the game initially
init();
