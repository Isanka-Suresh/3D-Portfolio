//CUBE ROTATION
const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 300;
let lastRotateX = 0;
let lastRotateY = 0;
let currentRotateX = 0;
let currentRotateY = 0;

//SLIDER
let slideIndex = 1;
showSlides(slideIndex);

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  currentRotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  currentRotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${lastRotateX + currentRotateX}deg) rotateY(${lastRotateY + currentRotateY}deg)`;
};

const handleTouchMove = (event) => {
  const touch = event.touches[0];
  currentRotateX = -(touch.clientY / window.innerHeight - 0.5) * rotationValue;
  currentRotateY = (touch.clientX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${lastRotateX + currentRotateX}deg) rotateY(${lastRotateY + currentRotateY}deg)`;
};

const startMouseMove = () => {
  window.addEventListener("mousemove", handleMouseMove);
};

const startTouchMove = () => {
  window.addEventListener("touchmove", handleTouchMove);
};

const stopMouseMove = () => {
  window.removeEventListener("mousemove", handleMouseMove);
  lastRotateX += currentRotateX;
  lastRotateY += currentRotateY;
};

const stopTouchMove = () => {
  window.removeEventListener("touchmove", handleTouchMove);
  lastRotateX += currentRotateX;
  lastRotateY += currentRotateY;
};

// Add event listeners for mouse and touch interactions
window.addEventListener("mousedown", startMouseMove);
window.addEventListener("mouseup", stopMouseMove);
window.addEventListener("touchstart", startTouchMove);
window.addEventListener("touchend", stopTouchMove);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-pages");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}