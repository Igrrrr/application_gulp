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

const container = document.querySelector(".offers__wrapper");

const cards = document.getElementsByClassName("offer");
const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((el) => {
    if (el.contentRect.width > 902) {
      el.target.classList.remove("offer__one");
    } else if (el.contentRect.width > 336) {
      el.target.classList.add("offer__one");
    } else if (el.contentRect.width > 213) {
      el.target.classList.remove("offer__one");
      el.target.classList.add("offer__two");
    } else {
      el.target.classList.remove("offer__two");
      el.target.classList.remove("offer__one");
    }
  });
});

[...cards].forEach((el) => resizeObserver.observe(el));
