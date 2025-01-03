function changeAboutMeText()
{
    const aboutMeTexts = ["Tech Enthusiast", "Creative Problem Solver", "Web Developer"]
    const typingspeed = 100;
    const erasespeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];
        /* typing */
        if (!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingspeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0){
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasespeed);
        }
        /* Switching the deleting or typing process  */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime)
        }
    }
    type();
}

// JavaScript Code 
document.addEventListener('DOMContentLoaded', function()  {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
       body.classList.toggle('dark-mode');
       const currentmode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
       darkModeToggle.querySelector('i').classList.toggle('fa-sun'); //change icon
       darkModeToggle.querySelector('i').classList.toggle('fa-moon'); //change icon 
       darkModeToggle.querySelector('i').classList.toggle('light-mode'); //change icon color from dark to light 
    } );
} ); 
// call function to add modification 
changeAboutMeText();

/*----------------------------------------------Modal Scripts- Project POPup-------------------------------------------- */

document.querySelectorAll('.btn.know-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = "block";
            disableScroll();
            const carouselContainer = modal.querySelector('.carousel-container');
            if (carouselContainer) {
                initializeCarousel(carouselContainer);
            }
        }
    });
});

// Function to initialize the carousel
function initializeCarousel(carouselContainer) {
    let slideIndex = 1;
    const slides = carouselContainer.querySelectorAll(".carousel-slide img");

    // Function to show the current slide
    function showSlides(n) {
        if (n > slides.length) (slideIndex = 1);
        if (n < 1) (slideIndex = slides.length);
        slides.forEach(slide => slide.style.display = "none");
        slides(slideIndex - 1).style.display = "block";
    }

    // Initial Display
    showSlides(slideIndex);

    // next/prev controls
    carouselContainer.querySelector('.prev').addEventListener('click', () => showSlides(--slideIndex));
    carouselContainer.querySelector('.next').addEventListener('click', () => showSlides(++slideIndex));
}

// close modal functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        enableScroll();
    }
});

// Function to prevent scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = '';
}

// Function to initialize the carousel 
function initializeCarousel(carouselContainer) {
    let slideIndex = 1;
    const slides = carouselContainer.querySelectorAll(".carousel-slide img");

    // Function to show the current slide 
    function showSlides (n) {
       if (n > slides.length) (slideIndex = 1);
           if (n< 1) ( slideIndex = slides.length );
           slides.forEach(slide => slide.style.display = "none");
           slides(slideIndex - 1).style.display="block";
    }

// Initial Display 
showSlides(slideIndex);
      
// next/prev controls
carouselContainer.querySelector('.prev').addEventListener('click', () => showSlides(--slideIndex));
carouselContainer.querySelector('.next').addEventListener('click', () => showSlides(++slideIndex));

// Enhanced modal logic to handle opening and initializing the carousel 
document.querySelectorAll('.btn.know-more').forEach(button => {
   button.addEventListener('click', function(e)  {
       e.preventDefault();
       const modalId = this.getAttribute('data-modal-target');
       const modal = document.querySelector(modalId);
       if (modal) {
           modal.style.display = "block";
           disableScroll();
           const carouselContainer = modal.querySelector('.carousel-container');
           if (carouselContainer) {
               initializeCarousel(carouselContainer) ;
           }
       }
   });
});

// close modal functionality 
document.addEventListener('click', function(e) {
   if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
       const modals = document.querySelectorAll('.modal');
       modals.forEach(modal => {
          modal.style.display = "none";
       });
       enableScroll();
   }
});     
}
// wrong 
// Select all modal elements
const projectModals = document.querySelectorAll('.modal');

// Add event listeners to each modal
projectModals.forEach((modal) => {
  const closeModal = modal.querySelector('.close');
  const prevSlide = modal.querySelector('.prev');
  const nextSlide = modal.querySelector('.next');
  const carouselSlides = modal.querySelectorAll('.carousel-slide img');

  // Add event listeners
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  prevSlide.addEventListener('click', () => {
    moveSlide(modal, -1);
  });

  nextSlide.addEventListener('click', () => {
    moveSlide(modal, 1);
  });

  // Carousel functionality
  let slideIndex = 1;

  function moveSlide(modal, n) {
    showSlides(modal, slideIndex += n);
  }

  function showSlides(modal, n) {
    let i;
    let slides = modal.querySelectorAll('.carousel-slide img');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }
});

// Show the modal when the "Know More" button is clicked
const knowMoreButtons = document.querySelectorAll('[data-modal-target]');
knowMoreButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = button.getAttribute('data-modal-target');
    const modal = document.querySelector(modalId);
    modal.style.display = 'block';
  });
});
//scroll functionality  
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});
//toggleMenu functionality
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.nav-toggle');

    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
}
