var typed = new Typed(".multitext",{
	strings:["Web Developer","Student","Youtuber","Student"],
	typeSpeed:70,
   backSpeed:70,
   backDelay:500,
   loop:true  
})



//
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// JS FOR HIDING NAV IN MOBILE VERSION

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const mobile = document.querySelector(".menu");
const mobile_b = document.querySelector(".close");
const nav_header = document.querySelector(".header");
var score = 0;
var yes = document.querySelector(".yes");

var yes2 = document.querySelector(".yes2");

var yes3 = document.querySelector(".yes3");

var yes4 = document.querySelector(".yes4");

var yes5 = document.querySelector(".yes5");

//On click of a navlink
yes.addEventListener('click',()=>{
	mobile.style.display = "block";
  	mobile_b.style.display = "none";
    nav_header.classList.remove("active");
})

yes2.addEventListener('click',()=>{
	mobile.style.display = "block";
  	mobile_b.style.display = "none";
    nav_header.classList.remove("active");
})

yes3.addEventListener('click',()=>{
	mobile.style.display = "block";
  	mobile_b.style.display = "none";
    nav_header.classList.remove("active");
})

yes4.addEventListener('click',()=>{
	mobile.style.display = "block";
  	mobile_b.style.display = "none";
    nav_header.classList.remove("active");
})

yes5.addEventListener('click',()=>{
	mobile.style.display = "block";
  	mobile_b.style.display = "none";
    nav_header.classList.remove("active");
})

document.getElementById("no1").addEventListener('click',() => {
	alert("Sorry! no account created yet.")
})



//On click of menu button toggle active and menu and close
function toggleNav() {
  nav_header.classList.toggle("active");
score = score+1;
console.log(score)
  if(score%2 == 1){
  	mobile.style.display = "none";
  	mobile_b.style.display = "block";
  }
  else if(score%2 == 0){
  	  	mobile.style.display = "block";
  	mobile_b.style.display = "none";
  }
}
mobile_nav.addEventListener('click', () => toggleNav())

//Js for sliding the skills bar on scroll to section

const observer = new IntersectionObserver(entries => {
  // We will fill in the callback later...
	entries.forEach(entry => {
      if (entry.isIntersecting) {
    // It's visible. Add the animation class here!
      	setTimeout(function () {
      		 document.getElementById("html").className = "html";
    document.getElementById("css").className = "css";
    document.getElementById("php").className = "php";
    document.getElementById("js").className = "js";
    document.getElementById("py").className = "py";
      	},1000);
   
  }
	})
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.skills'));

 
