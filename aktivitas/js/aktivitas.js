/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// animasi
const slider = document.querySelector(".slider");
const list = document.querySelector(".list"); // Perbaikan: querySelector untuk memilih elemen tunggal
const thumbnail = document.querySelector(".thumbnail");
const next = document.querySelector("#next"); // Perbaikan: querySelector untuk memilih elemen tunggal
const prev = document.querySelector("#prev"); // Perbaikan: querySelector untuk memilih elemen tunggal

// auto play
let runAutoPlay = setTimeout(() => {
  next.click(); // Menggunakan elemen tunggal
}, 8000);

next.addEventListener("click", () => {
  initSlider("next");
});

prev.addEventListener("click", () => {
  initSlider("prev");
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    thumbnail.prepend(thumbnailItems[lastItemPosition]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.click(); // Menggunakan elemen tunggal
  }, 8000);
}
  

/* FUNGSI KOLOM KE-N */
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body"); // Perbaikan selector
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div"); // Perbaikan selector

for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function() {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active"); // Perbaikan remove class
        tabBodyNodes[i].classList.add("active");

        // Perbaikan interpolasi string pada style.left
        tabIndicator.style.left = `calc(${i * 20}% + 5px)`;
    })
}

/*SWAIPER*/
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  //Pagination bullets
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
  },

  //Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
  }
  });


