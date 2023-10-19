/*================navbar==================*/
const navEl = document.querySelector('nav');
window.addEventListener('scroll',() =>{
  if(window.scrollY > 20){
    navEl.classList.add('navbar-scrolled');
  } else if (window.scrollY<=20){
    navEl.classList.remove('navbar-scrolled');
  }
});

/*===============activating nav links==============*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');
let navDlinks = document.querySelectorAll('#book-food, #download-app, #footer');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 195;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      navDlinks.forEach(dlinks => {
        dlinks.classList.remove('active');
      });
      let targetLink = document.querySelector(`nav ul li a[href*="${id}"]`);
      if (targetLink !== null) {
        targetLink.classList.add('active');
      }
    }
  });
};

/*=============mobile navbar menu==============*/
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach( (e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

/*==============section counter===============*/
document.addEventListener("DOMContentLoaded", () => {
  function counter (id, start, end, duration) {
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs (Math.floor (duration / range) ),
    timer = setInterval( () => {
      current += increment;
      obj.textContent = current;
      if(current==end){
        clearInterval(timer);
      }
    }, step);
  };
  counter("count1", 158, 1158, 1000);
  counter("count2", 3265, 4265, 1000);
  counter("count3", 200, 1200, 1000);
  counter("count4", 5521, 6521, 1000);
});