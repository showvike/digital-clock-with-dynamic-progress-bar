const HOUR = document.getElementById("hour");
const MINUTE = document.getElementById("minute");
const SECOND = document.getElementById("second");
const PROGRESS = document.getElementById("progress");

function showCurrentTime() {
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	HOUR.textContent = hr;
	MINUTE.textContent = min;
	SECOND.textContent = sec;

	progress.style.width = (sec / 60) * 100 + '%';
}

setInterval(showCurrentTime, 1000);
