const navigation = document.getElementById('navigation');
const backToTopButton = document.getElementById('backToTopButton');
const home = document.getElementById('home');
const services = document.getElementById('services');
const about = document.getElementById('about');
const contact = document.getElementById('contact');



const showNavOnScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

const showBackToTopButtonOnScroll = () => {
  if (scrollY > 500) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

const activateMenuAtCurrentSection = (section) => {
  const targetLine = scrollY + (innerHeight / 2);
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

const onScroll = () => {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
};

window.addEventListener('scroll', onScroll);
onScroll();

const openMenu = () => {
  document.body.classList.add('menu-expanded')
};

const closeMenu = () => {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home .header-img, #home .stats, #services, #services header, #services .cards, #about, #about header, #about .content');