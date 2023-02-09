function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      console.log(windowHeight);
      var elementTop = reveals[i].getBoundingClientRect().top;
      console.log(elementTop);
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal-active");
      } else {
        reveals[i].classList.remove("reveal-active");
      }
    }
}

window.addEventListener("scroll", reveal)