let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
};



let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)  {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000 ,
    delay: 200

 });

 ScrollReveal().reveal('.home-content , .skills, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img , .skills-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
