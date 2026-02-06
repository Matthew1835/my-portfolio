const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");
const links = document.querySelectorAll(".nav-link");
const isMobile = window.matchMedia("(max-width: 768px)");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    if (isMobile.matches) {
        document.body.classList.toggle("no-scroll");
    }
})

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        
        if (isMobile.matches) {
            document.body.classList.remove("no-scroll");
        }
    })
});

isMobile.addEventListener("change", () => {
  if (!isMobile.matches) {
    document.body.classList.remove("no-scroll");
  }
});