const sky = document.querySelector('.sky');
const tooltip = document.getElementById('tooltip');

// Função para criar estrelas aleatórias
function createStars(numStars = 60) {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Posição e velocidade aleatória
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = 5 + Math.random() * 10 + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    sky.appendChild(star);
  }
}

// Cria as estrelas animadas
createStars();

// Adiciona estrelas fixas com informações (como Sirius, Betelgeuse etc.)
const starsInfo = [
  { top: '20%', left: '30%', name: 'Sirius', info: 'Estrela mais brilhante do céu noturno.' },
  { top: '50%', left: '70%', name: 'Betelgeuse', info: 'Supergigante vermelha na constelação de Órion.' },
  { top: '70%', left: '40%', name: 'Polaris', info: 'Estrela do Norte, guia para navegação.' }
];

starsInfo.forEach(data => {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = data.top;
  star.style.left = data.left;
  star.style.width = '8px';
  star.style.height = '8px';
  star.style.background = 'yellow';
  star.style.animation = 'none'; // fixa
  star.dataset.name = data.name;
  star.dataset.info = data.info;
  sky.appendChild(star);
});

// Tooltip interativo
sky.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('star') && e.target.dataset.name) {
    tooltip.innerHTML = `<strong>${e.target.dataset.name}</strong><br>${e.target.dataset.info}`;
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
    tooltip.style.display = 'block';
  } else {
    tooltip.style.display = 'none';
  }
});
