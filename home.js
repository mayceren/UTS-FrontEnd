const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}




animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".gem .container", [".gem .label", ".gem .heading", ".gem .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".gem .voices", [".gem .voices .box1",".gem .voices .box2",".gem .voices .box3",".gem .voices .box4",".gem .voices .box5",".gem .voices .box6"])

/* BLUR HEADER */
const blurHeader = () => {
    const header = document.getElementById("header");
    const scrollValue = window.scrollY;
  
    if (scrollValue >= 90) {
      const blurValue = Math.min(scrollValue / 10, 30);
      header.style.backdropFilter = `blur(${blurValue}px)`;
      header.style.webkitBackdropFilter = `blur(${blurValue}px)`;
      header.style.backgroundColor = `rgba(128, 128, 128, 0.3)`;
    } else {
      header.style.backdropFilter = 'blur(0px)';
      header.style.webkitBackdropFilter = 'blur(0px)';
    }
};
  
window.addEventListener("scroll", blurHeader);

/* GARIS BAWAH PADA NAVBAR */
const navLinks = document.querySelectorAll('nav ul li a');

const sections = document.querySelectorAll('section');

const highlightNavbar = () => {
  let scrollPos = window.scrollY + 50;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      const currentId = section.getAttribute('id');

      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(`nav ul li a[href="#${currentId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

window.addEventListener('scroll', highlightNavbar);

/* EFEK SCROLL */
const Links = document.querySelectorAll('nav ul li a');

Links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/* FITUR PENCARIAN */
const files = [
    { name: "Bali", url: "Bali.html" },
    { name: "Bandung", url: "Bandung.html" },
    { name: "Jakarta", url: "Jakarta.html" },
    { name: "Raja Ampat", url: "RajaAmpat.html" },
    { name: "Yogyakarta", url: "Yogyakarta.html" },
];

function searchAndRedirect() {
    const query = document.getElementById('search-box').value.toLowerCase();
    const result = files.find(file => file.name.toLowerCase().includes(query));

    if (result) {
        window.location.href = result.url;
    } else {
        alert('No matching page found.');
    }
}

document.getElementById('search-button').addEventListener('click', searchAndRedirect);

document.getElementById('search-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchAndRedirect();
    }
});

function showRecommendations(query) {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';

    if (query) {
        const matches = files.filter(file => file.name.toLowerCase().includes(query.toLowerCase()));

        matches.forEach(match => {
            const listItem = document.createElement('li');
            listItem.textContent = match.name;
            listItem.dataset.url = match.url;

            listItem.addEventListener('click', function() {
                window.location.href = match.url;
            });

            recommendationList.appendChild(listItem);
        });

        if (matches.length > 0) {
            recommendationList.style.display = 'block';
        } else {
            recommendationList.style.display = 'none';
        }
    } else {
        recommendationList.style.display = 'none';
    }
}

document.getElementById('search-box').addEventListener('input', function() {
    const query = this.value.trim();
    showRecommendations(query);
});

document.addEventListener('click', function(event) {
    const recommendationList = document.getElementById('recommendation-list');
    if (!document.querySelector('.search').contains(event.target)) {
        recommendationList.style.display = 'none';
    }
});
