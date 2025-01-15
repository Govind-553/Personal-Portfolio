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
