let menuIcon = document.querySelector('#menu_icon')
let navbar =  document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top  = window.scrollY;
        let offset  = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id =sec.getAttribute('id')

        if(top >= offset && offset + height ){
            navlinks.forEach.apply(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('fa-x')
    navbar.classList.remove('active')
}



ScrollReveal({ distance: '80px',duration:2000,delay:200});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


let typed = new Typed('.typing-text', {
    strings: ['Full Stack Developer', 'MERN Stack Developer', 'Learner'],
    typeSpeed: 50,
    backSpeed:70,
    backDelay:1000,
    loop:true,
  });
