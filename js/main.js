const showMenu = (toggLeId, navId) => {
  const toggle = document.getElementById(toggLeId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  // ACTIVE MENU 
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // REMOVE MENU 
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// AUTO-TYPING
var typed = new Typed('.home__title-color', {
  strings: ['Ismoil.', 'a Full Stack Developer.', 'a Web Developer.'],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

// SCROLL-NAVIGATION
// SCROLL-BUTTON
window.addEventListener('scroll', function(){
  var header = document.querySelector('.l-header');
  var scroll = document.querySelector('.scrollTop');

  header.classList.toggle('sticky', window.scrollY > 0);

  scroll.classList.toggle('active', window.scrollY > 500)
})

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// SCROLL-ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: true
})

// // SCROLL-HOME
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__title', {delay: 400})
sr.reveal('.home__title', {interval: 200})

// // SCROLL-ABOUT
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

// // SCROLL-SKILLS
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

// // SCROLL-WORK
sr.reveal('.work__img',{interval: 200})

// // SCROLL-CONTACT
sr.reveal('.box',{interval: 200})
