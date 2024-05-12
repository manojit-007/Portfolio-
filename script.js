let menuIcon = document.querySelector('#menu_icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && offset + height) {
            navlinks.forEach.apply(links => {
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



ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


let typed = new Typed('.typing-text', {
    strings: ['Full Stack Developer', 'MERN Stack Developer', 'Learner'],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});



// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "monodemo2024@gmail.com",
//         Password : "sdyombetignbtnkp",
//         To : 'monojitpc2022@gmail.com',
//         From : document.getElementById("email").value,
//         Subject :  document.getElementById("topic").value,
//         Body : document.getElementById("message").value
//     }).then(
//       message => alert(message)
//     );
// }


//   <form onsubmit="sendEmail(); reset(); return false">
// <div class="input-box">
//     <input type="text" id="name" placeholder="Full name">
//     <input type="email" id="email" placeholder="Email">

// </div>
// <div class="input-box">
//     <input type="number" id="phone_no" placeholder="Phone number">
//     <input type="text" id="topic" placeholder="Subject">
// </div>
// <textarea name="" id="message" placeholder="Message"></textarea>
// <input type="submit" value="send message" class="btn">
// </form>

// SMPT_SERVICE="gmail"
// SMPT_MAIL="monodemo2024@gmail.com"
// SMPT_PASSWORD="sdyombetignbtnkp"
// SMPT_HOST="smtp.gmail.com"
// SMPT_PORT=465