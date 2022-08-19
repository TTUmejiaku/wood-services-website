const div = document.getElementById("map");
const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const bodyEl = document.getElementsByTagName("body");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  bodyEl[0].classList.toggle("show-nav");
});

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
