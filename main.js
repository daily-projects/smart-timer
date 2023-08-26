const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const timers = document.querySelector('.timers');




btn.addEventListener('click', () => {
	const div = document.createElement('div');
	div.textContent = input.value;
	timers.appendChild(div);
	input.value = '';
	let timeInterval = setInterval(() => {
		div.textContent--;
		if (+div.textContent < 0) {
			timers.removeChild(div);
			clearInterval(timeInterval)
			return;
		}
	}, 1000)
})