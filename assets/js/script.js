/*---------------navbar----------------*/
const navEl = document.querySelector('nav');
window.addEventListener('scroll',() =>{
  if(window.scrollY > 20){
    navEl.classList.add('navbar-scrolled');
  } else if (window.scrollY<=20){
    navEl.classList.remove('navbar-scrolled');
  }
});
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');
window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 195;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('nav ul li a[href*=' +id+']').classList.add('active');
      });
    };
  });
};


/*---------------our-contact-button----------------*/
const button = document.getElementById('our-contact-button');
button.addEventListener('click', () => {
  alert('This is an Sample Website so we don\'t have any customer service officer');});


/*footer-social-links*/
const socialLinks = document.querySelectorAll('.footer-social-icons a');
socialLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    alert("We don't have any social media account because this is just a sample website");
  });
});