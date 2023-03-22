const nav = document.getElementById("nav");
const navLogo = document.getElementById("nav-logo");
const navTitle = document.getElementsByClassName("nav-title");
const navLink= document.querySelector(".nav-link");
const navIcon = document.getElementsByClassName("nav-icon");

window.onscroll= () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        nav.classList.add("nav-scroll");
        navLogo[0].classList.add("nav-logo-scroll");
        navLogo[0].classList.add("nav-title-scroll");
        navIcon[0].classList.add("nav-icon-scroll");

        navLink.foreach(navLinks => {
            navLinks.classList.add("nav-link-scroll");

        })
    }
    else{

        nav.classList.remove("nav-scroll");
        navLogo[0].classList.remove("nav-logo-scroll");
        navLogo[0].classList.remove("nav-title-scroll");
        navIcon[0].classList.remove("nav-icon-scroll");

        navLink.foreach(navLinks => {
            navLinks.classList.remove("nav-link-scroll");
        })


    }
}
AudioScheduledSourceNode.init({
    delay:0,
    duration:900,
    once:true

})