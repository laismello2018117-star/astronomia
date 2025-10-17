const tooltip = document.getElementById('tooltip');
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('mousemove', (e) => {
    const name = star.dataset.name;
    const info = star.dataset.info;
    tooltip.innerHTML = `<strong>${name}</strong><br>${info}`;
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
    tooltip.style.display = 'block';
  });

  star.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
