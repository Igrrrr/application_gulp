const slider = new Splide("#slider", {
  perPage: 4,
  gap: "1rem",
  flickMaxPages: 1,
  arrows: false,
  gap: 40,
  breakpoints: {
    991: {
      perPage: 2,
    },
    767: {
      perPage: 1,
    },
  },
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
      timer(seconds);
      return;
    }
    displayTimer(secondsLeft);
  }, 1000);
};

const displayTimer = (seconds) => {
  const hours = "00";
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const display = `${hours} : ${minutes < 10 ? "0" : ""}${minutes} : ${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
};

timer(1800);

const offers = document.getElementsByClassName("offer");
for (let index = 0; index < offers.length; index++) {
  const element = offers[index];
  if (element.offsetWidth > 335) {
    element.classList.add("offer__one");
  } else if (element.offsetWidth > 213) {
    element.classList.add("offer__two");
  }
}
