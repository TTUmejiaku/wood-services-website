const div = document.getElementById("map");
const slides = document.querySelectorAll(".slide");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");
const slideControls = document.querySelectorAll(".slide-control span");
const firstSlideControl = document.querySelector(".slide-control");
const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const bodyEl = document.getElementsByTagName("body");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  bodyEl[0].classList.toggle("show-nav");
  navToggle.classList.toggle("show-nav");
});

// Target viewport width of 900px and above
const mediaQuery = window.matchMedia("(min-width: 900px)");

// Function that removes the class of show-nav
// at viewport width of 900px and above.
function handleWindowChange(e) {
  // Check if the media query is true
  if (e.matches) {
    let navContainsShowNav = nav.classList.contains("show-nav");
    let navToggleContainsShowNav = navToggle.classList.contains("show-nav");
    let bodyContainsShowNav = bodyEl[0].classList.contains("show-nav");

    // Remove the show-nav class from nav, body, and nav-toggle
    // if the nav and body still contains show-nav
    if (navContainsShowNav && bodyContainsShowNav) {
      nav.classList.remove("show-nav");
      bodyEl[0].classList.remove("show-nav");
      navToggle.classList.remove("show-nav");
    }
  }
}

// Register event listener
mediaQuery.addListener(handleWindowChange);

// Give background color to the first slide on window load
firstSlideControl.children[0].classList.add("slide-control-bg-color");

// Position every slide to the left of its index * 100
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

rightArrow.addEventListener("click", () => {
  counter++;
  carousel();
});

leftArrow.addEventListener("click", () => {
  counter--;
  carousel();
});

// Moving the slides with the slide control buttons
slideControls.forEach((slideControl, index) => {
  slideControl.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  });
});

// Moving the slides with arrow buttons
const carousel = () => {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slideControls.forEach((slideControl, index) => {
    if (counter === index) {
      slideControl.classList.add("slide-control-bg-color");
    } else {
      slideControl.classList.remove("slide-control-bg-color");
    }
  });

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Google map function
function initMap() {
  let options = {
    center: { lat: 6.4453, lng: 3.2634 },
    zoom: 10,
  };

  const map = new google.maps.Map(div, options);

  const marker = new google.maps.Marker({
    position: options.center,
    map: map,
  });
}
