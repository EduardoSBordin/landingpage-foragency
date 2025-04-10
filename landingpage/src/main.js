import './style.css'

window.addEventListener("scroll", function () {
  let menu = document.querySelector("nav");
  
  if (window.scrollY > 50) {
      menu.classList.add("scrolled");
  } else {
      menu.classList.remove("scrolled");
  }
});

let counter = 0;
document.querySelector('#btnModal').addEventListener('click', () => {
  // alert();
  // counter++;

  document.querySelector('.spanLinkMobile').classList.toggle('openModal');
  // console.log(counter);

  
})