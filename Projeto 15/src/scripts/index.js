function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawNumber() {
  const quantity = parseInt(document.getElementById('quantity').value);
  const from = parseInt(document.getElementById('from').value);
  const to = parseInt(document.getElementById('to').value);

  if(isNaN(quantity) || isNaN(from) || isNaN(to)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const drawNumbers = [];
  while(drawNumbers.length < quantity) {
    const number = generateRandomNumber(from, to);
    if(!drawNumbers.includes(number)) {
      drawNumbers.push(number);
    }
  }

  document.getElementById('result').classList.remove('hidden');
  document.getElementById('raffle').classList.add('hidden');

  const cards = document.getElementById('result').querySelector('.cards');
  cards.innerHTML = '';

  drawNumbers.forEach(number => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<span>${number}</span>`;
    cards.appendChild(card);
  });
}

document.querySelector('#raffle button').addEventListener('click', drawNumber);
document.querySelector('#result button').addEventListener('click', () => {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('raffle').classList.remove('hidden');
  document.querySelector('form').reset();
});