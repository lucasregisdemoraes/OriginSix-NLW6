// Hamburguer Menu
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("#header nav ul li a");
for (link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

// Swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerWiew: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// ScrollRevel: show element when scroll the page
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// Header scroll Function
function headerScroll() {
  const header = document.querySelector("#header");
  let navHeight = header.offsetHeight;

  window.scrollY >= navHeight
    ? header.classList.add("scroll")
    : header.classList.remove("scroll");
}

// Back to top Function
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  window.scrollY >= 560
    ? backToTopButton.classList.add("show")
    : backToTopButton.classList.remove("show");
}

// When Scroll
window.addEventListener("scroll", () => {
  backToTop();
  headerScroll();
});
