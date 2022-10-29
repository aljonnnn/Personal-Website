window.onscroll = function() {navbarSticky()}

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop; 

function navbarSticky(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}