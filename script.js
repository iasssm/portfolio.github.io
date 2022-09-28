//navigation bar effect on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

//menu button
// $(document).ready(function () {
//   $(window).scroll(function () {
//     // sticky navbar on scroll script
//     if (this.scrollY > 20) {
//       $('.navbar').addClass('sticky');
//     } else {
//       $('.navbar').removeClass('sticky');
//     }
//   });

// toggle menu/navbar script
//   $('.menu-btn').click(function () {
//     $('.navbar .navbar-links').toggleClass('active');
//     $('.menu-btn i').toggleClass('active');
//   });
// });

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

//send email JS
function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      name.value = '';
      email.value = '';
      msg.value = '';
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send('service_gwqjyub', 'template_kyijmfl', {
    from_name: email,
    to_name: name,
    message: msg,
  });
}
function emptyerror() {
  swal({
    title: 'Oh no...',
    text: 'Fields cannot be empty!',
    icon: 'error',
  });
}
function success() {
  swal({
    title: 'Email sent successfully',
    text: 'Thank you!',
    icon: 'success',
  });
}

// rolly js
// const r = rolly({
//   view: document.querySelector('.app'),
//   native: true,

// });
// r.init();

//about me-image
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  };

  // IMAGE ANIMATION

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add('animating');
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove('animating');
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll('.reveal').forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;
      container.classList.add('not-fading-up');

      if (entry.isIntersecting) {
        container.classList.add('fading-up');
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove('fading-up');
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll('.fadeup').forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});
//new
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
