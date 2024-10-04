const slider = new Splide("#slider", {
  // breakpoints: {
  // 	640: {
  // 		perPage: 2,
  // 	},
  flickMaxPages: 1,
  arrows: false,
  gap: 40,
});

slider.mount();

let countdown;
const timerDisplay = document.querySelector(".discount__countdown");

const timer = (seconds) => {
  const currentTime = Date.now();
  const endTime = currentTime + seconds * 1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimer(secondsLeft);
  }, 1000);
};

const displayTimer = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const display = `${minutes} : ${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
};
