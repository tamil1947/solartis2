var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/*mobileview dropdown*/
let menu=document.querySelector("#navv-btn");
let navdisplay=document.querySelector(".accordion-container")
menu.addEventListener('click',()=>{
navdisplay.classList.toggle('active');
})
