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