const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-color-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
  } else {
    navbar.classList.remove("bg-color-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
  }
};

// Mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

// Team
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

function rakhle() {
  window.location.href = "preorder.html";
}

document.getElementById("learnMoreBtn").addEventListener("click", function () {
  var learnElement = document.getElementById("aboutus");
  learnElement.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.getElementsByClassName('smooth-scroll-link');
    
    for (let i = 0; i < smoothScrollLinks.length; i++) {
      smoothScrollLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
  


const readMoreButton = document.getElementById("read");
const paragraph = document.getElementById("para");

readMoreButton.addEventListener("click", function () {
  readMoreButton.style.display = "none";
  paragraph.classList.remove("hidden");
});

const mediaQuery = window.matchMedia("(min-width: 769px)");

function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // Screen width is larger than 768px
    const element = document.getElementById("element");
    element.style.display = "none";
  } else {
    // Screen width is smaller than 769px
    const element = document.getElementById("element");
    element.style.display = "block"; // Or any other desired value
  }
}
// Initial check
handleMediaQuery(mediaQuery);
// Listen for changes in the media query
mediaQuery.addListener(handleMediaQuery);
