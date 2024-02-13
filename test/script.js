const hoverButton = document.getElementById('hoverButton');
const list = document.getElementById('list');

hoverButton.addEventListener('mouseover', () => {
  list.classList.remove('hidden');
});

hoverButton.addEventListener('mouseout', () => {
  list.classList.add('hidden');
});
