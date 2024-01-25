let hamburger = document.querySelector('.hamburger');
let links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('toggle-links');
})

document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");
  
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };
  
    function scrollToTop() {
        console.log("Button clicked!");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });
  