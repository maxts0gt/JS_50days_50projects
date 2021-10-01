const container = document.getElementById('container');
const colors = ['#1DB9C3', '#7027A0', '#C32BAD', '#F56FAD', '#EC9CD3'];
const SQUARES = 400;

console.log(container);

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseout', () => removeColor(square));

	container.appendChild(square);
}

function setColor(e) {
	const color = getRandomColor();
	e.style.background = color;
	e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
	e.style.background = '#1d1d1d';
	e.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
