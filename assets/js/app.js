/*
  Abdughafur Khujzoda
  Copyright (c) 2026 Abdughafur Khujzoda. All rights reserved.
*/

const totalImages = 16;
let index = 0;
let playing = true;

const slidesContainer = document.getElementById("slides");

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");
  img.src = `assets/images/${i}.jpg`;
  img.className = "slide";
  if (i === 1) img.classList.add("active");
  slidesContainer.appendChild(img);
}

const slides = document.querySelectorAll(".slide");

const dotsContainer = document.getElementById("dots");

slides.forEach((_, i) => {
  const d = document.createElement("div");
  d.className = "dot";
  if (i === 0) d.classList.add("active");
  d.onclick = () => goTo(i);
  dotsContainer.appendChild(d);
});

const dots = document.querySelectorAll(".dot");

function update() {
  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");

  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
}

function next() {
  index = (index + 1) % slides.length;
  update();
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  update();
}

function goTo(i) {
  index = i;
  update();
}

function togglePlay() {
  playing = !playing;

  const icon = document.getElementById("playIcon");

  if (playing) {
    icon.innerHTML = `
      <rect x="6" y="5" width="4" height="14" fill="#4da3ff"/>
      <rect x="14" y="5" width="4" height="14" fill="#4da3ff"/>
    `;
  } else {
    icon.innerHTML = `
      <path d="M8 5v14l12-7-12-7z" fill="#4da3ff"/>
    `;
  }
}

setInterval(() => {
  if (playing) next();
}, 2500);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function openInfo() {
  document.getElementById("infoScreen").style.display = "flex";
}

function closeInfo() {
  document.getElementById("infoScreen").style.display = "none";
}

/*
  Copyright 2026 Abdughafur Khujzoda
*/
