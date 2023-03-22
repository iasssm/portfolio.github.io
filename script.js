
//projects- MIXITUP filter
let mixerProjects = mixitup('.projects-container', {
  selectors: {
    target: '.projects-card',
  },
  animation: {
    duration: 300,
  },
});
//projects - link active projects
const linkProjects = document.querySelectorAll('.project-item');

function activeProjects() {
  linkProjects.forEach((l) => l.classList.remove('active-project'));
  this.classList.add('active-project');
}
linkProjects.forEach((l) => l.addEventListener('click', activeProjects));

//projects popup
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-button')) {
    toggleProjectPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function toggleProjectPopup() {
  document.querySelector('.project-popup').classList.toggle('open');
}

document
  .querySelector('.project-popup-close')
  .addEventListener('click', toggleProjectPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp-thumbnail img').src =
    portfolioItem.querySelector('.project-img').src;
  document.querySelector('.project-popup-subtitle').innerHTML =
    portfolioItem.querySelector('.details-title').innerHTML;
  document.querySelector('.project-popup-body').innerHTML =
    portfolioItem.querySelector('.project-item-details').innerHTML;
}
//navigation bar 
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
});
