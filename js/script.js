
// sidebar menu and burger animation
const burger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

burger.addEventListener('click', ()=> {
  // animate links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });


  burger.classList.toggle("toggle");

});

// accordion
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


// carousel
var index = 0;

show_image(index);

function show_image(i) {
  index += i;

  var images = document.getElementsByClassName("image");

  var dot = document.getElementsByClassName("dot");

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";

  }

  for (var i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" activedot", "")
  }

  if (index > images.length - 1) {
      index = 0;
  }
  if (index < 0) {
      index = images.length - 1;
  }

  images[index].style.display = "block";
  dot[index].className += " activedot";


}


// form date

let today = new Date().toISOString().substr(0,10);
document.querySelector('#date-picker').value = today;
$('#date-picker').attr('min',today);



// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0');
// var yyyy = today.getFullYear();
//
// today = mm + '-' + dd + '-' + yyyy;
// $('#date-picker').attr('min',today);
