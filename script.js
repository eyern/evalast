const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var close_button = document.querySelector(".close-button");
var social_buttons = document.querySelectorAll(".social");

close_button.addEventListener('click',()=>{
   social_buttons.forEach(function(buttons){
       buttons.classList.toggle('hide');
   });
});