const refresh = document.querySelector('#refresh');
const p1 = document.querySelector('.img1');
const p2 = document.querySelector('.img2');
const h1 = document.querySelector('.h1');
const sayWinner = document.querySelector('.say-winner');

refresh.addEventListener('click', () => {
  const rand1 = Math.floor(Math.random() * 6) + 1;
  const rand2 = Math.floor(Math.random() * 6) + 1;
  p1.setAttribute('src', `images/dice${rand1}.png`);
  p2.setAttribute('src', `images/dice${rand2}.png`);
  if (rand1 > rand2) {
    h1.textContent = 'Player 1 Wins!';
  } else if (rand2 > rand1) {
    h1.textContent = 'Player 2 Wins!';
  } else {
    h1.textContent = 'Draw!';
  }
});
