const img1 = document.querySelector(".img-1");
const video1 = document.querySelector(".video-1");
const img2 = document.querySelector(".img-2");
const video2 = document.querySelector(".video-2");
const img3 = document.querySelector(".img-3");
const video3 = document.querySelector(".video-3");
const img4 = document.querySelector(".img-4");
const video4 = document.querySelector(".video-4");
const img5 = document.querySelector(".img-5");
const video5 = document.querySelector(".video-5");


const videoToggle = () => {
  img1.classList.add("hidden");
  video1.classList.remove("hidden");
  video1.setAttribute(
    "src",
    "https://www.youtube.com/embed/I9QGnNvrmoY?autoplay=1"
  );
};

img1.addEventListener("click", videoToggle);

const videoToggle2 = () => {
  img2.classList.add("hidden");
  video2.classList.remove("hidden");
  video2.setAttribute(
    "src",
    "https://www.youtube.com/embed/ckub1RSlhic?autoplay=1"
  );
};

img2.addEventListener("click", videoToggle2);

const videoToggle3 = () => {
  img3.classList.add("hidden");
  video3.classList.remove("hidden");
  video3.setAttribute(
    "src",
    "https://www.youtube.com/embed/xkmM6h32lnM?autoplay=1"
  );
};

img3.addEventListener("click", videoToggle3);

const videoToggle4 = () => {
  img4.classList.add("hidden");
  video4.classList.remove("hidden");
  video4.setAttribute(
    "src",
    "https://www.youtube.com/embed/vhG3wKGp2mc?autoplay=1"
  );
};

img4.addEventListener("click", videoToggle4);

const videoToggle5 = () => {
  img5.classList.add("hidden");
  video5.classList.remove("hidden");
  video5.setAttribute(
    "src",
    "https://www.youtube.com/embed/m_hx0Ebg5Yo?autoplay=1"
  );
};

img5.addEventListener("click", videoToggle5);