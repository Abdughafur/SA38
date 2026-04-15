/*
  Abdughafur Khujzoda
  Copyright (c) 2026 Abdughafur Khujzoda. All rights reserved.
*/
const slides = document.querySelectorAll(".slide");
let index = 0;
let playing = true;

function showNext() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(() => {
  if (playing) showNext();
}, 2000);

const pauseBtn = document.getElementById("pauseBtn");
const pauseIcon = document.getElementById("pauseIcon");

pauseBtn.onclick = () => {
  playing = !playing;

  pauseIcon.innerHTML = playing
    ? `<rect x="6" y="5" width="4" height="14" fill="#007aff"/>
       <rect x="14" y="5" width="4" height="14" fill="#007aff"/>`
    : `<polygon points="6,4 20,12 6,20" fill="#007aff"/>`;
};

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAbout");

aboutBtn.onclick = () => {
  aboutModal.classList.add("show");
  playing = false;
};

closeAbout.onclick = () => {
  aboutModal.classList.remove("show");
  playing = true;
};
