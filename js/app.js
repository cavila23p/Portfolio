const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("#nav-links");
const links = document.querySelectorAll("#nav-links li");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
const h1 = document.querySelector(".header h1");
let menuOpen = false;


hamburger.addEventListener("click", () => {  
  menuToggle(); 
});

const aLink = () => {
  menuToggle();
};

function menuToggle (){
  
  if(!menuOpen) { 
    setTimeout(function() {
      h1.style.display = "none";
    }, 150);   
    
    line2.style.transform = "translateX(-50px)";
    line2.style.background = "transparent";
    line2.style.boxShadow = "none";
    line1.style.transform = "rotate(-45deg) translate(-10px, 2px)";
    line3.style.transform = "rotate(45deg) translate(-10px, -2px)";

    navLinks.classList.add("open");
    links.forEach(link => {
      link.classList.add("fade");
    });   

    menuOpen = true;
  } 
  
  else { 
    setTimeout(function() {
      h1.style.display = "block";   
    }, 800);     
    
    line2.style.transform = "translateX(50px)";
    line2.style.background = "#fff";
    line2.style.boxShadow = "0 2px 5px rgba(255,101,47,.2)";
    line2.style.transform = "rotate(0deg) translate(-10px, 0px)";
    line1.style.transform = "rotate(0deg) translate(-10px, -2px)";
    line3.style.transform = "rotate(0deg) translate(-10px, 2px)";

    navLinks.classList.remove("open");
    links.forEach(link => {
      link.classList.remove("fade");
    });    
    menuOpen = false;
  }
}