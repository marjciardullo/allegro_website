//Scroll para header

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("rolar", scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
}

//Scroll para aparecer os elementos quando rolar

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


  function revealFade(){
    const fadein = document.querySelector(".fade-in")
    fadein.classList.toggle("fade");
  }