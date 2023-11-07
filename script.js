// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use anmation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });


    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animate footer on scroll
    let footer =document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

    //email validation
    function validation() {
        var form = document.getElementById("form");
        var email = document.getElementById("E-mail").value;
        var text = document.getElementById("text");
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(E-mail.match(pattern)){
            form.classList.add("valid");
            form.classList.remove("invalid");
        }
        else{
            form.classList.remove("valid");
            form.classList.add("invalid");
        }
    }

    //time
    let time = document.getElementById("current-time");

    setInterval(() => {
        let d = new Date();
    time.innerHTML = d.toLocaleTimeString()
    }, 1000);