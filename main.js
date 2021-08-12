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
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
const header = document.querySelector("#header");
let navHeight = header.offsetHeight;

function headerScroll() {
  window.scrollY >= navHeight
    ? header.classList.add("scroll")
    : header.classList.remove("scroll");
}

// Back to top Function
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  window.scrollY >= 560
    ? backToTopButton.classList.add("show")
    : backToTopButton.classList.remove("show");
}

// Active menu
const sections = document.querySelectorAll('main section[id]')

function activeMenuLink() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    let currentSection = document.querySelector(`nav ul li a[href='#${sectionId}']`)

    checkpointStart && checkpointEnd ? currentSection.classList.add('active') : currentSection.classList.remove('active')
    // Or
    /*
    if (checkpoiintStart && checkpointEnd) {
      currentSection.classList.add('active')
    } else {
      currentSection.classList.remove('active')
    }
    */
  }
}

// When Scroll
window.addEventListener("scroll", () => {
  backToTop();
  headerScroll();
  activeMenuLink()
});
