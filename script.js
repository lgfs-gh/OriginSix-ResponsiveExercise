/* ----------- MENU  ----------- */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

/* show/hide menu toggle */
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* menu hide - item interaction */
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* ----------- FUNCTIONS  ----------- */

/* Header shadow */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function headerScrollShadow() {
    if (window.scrollY >= navHeight){
        header.classList.add("shadow")
    }
    else {
        header.classList.remove("shadow")
    }
}

/* Back To Top button */
const button = document.querySelector('.back-to-top');
function backToTop() {
    if (window.scrollY >= 560){
        button.classList.add("button-show")
    }
    else {
        button.classList.remove("button-show")
    }
}

/* Menu items activation */
const sections = document.querySelectorAll('main section[id]');
function activateMenuItemByScroll() {
    const checkLine = window.pageYOffset + (innerHeight / 8) * 4;
    for(const section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        startLine = checkLine >= sectionTop;
        endLine = checkLine <= sectionTop + sectionHeight;
        
        if (startLine && endLine){
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
        }
    }
}
/* ----------- SCROLL ACTIONS ----------- */

window.addEventListener('scroll', function() {
    headerScrollShadow()
    backToTop()
    activateMenuItemByScroll()
})

/* ----------- SWIPER  ----------- */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    keyboard: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
          setWrapperSize: true
        }
      }
});

/* ----------- SCROLL REVEAL  ----------- */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services .header, #services .card,
#testimonials .header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .banner, footer .social
`, {interval: 100})