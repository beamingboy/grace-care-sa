$(function () {
    $("#footer-container").load("./assets/footer.html");
    $("#header-navigation").load("./assets/navbar.html");
});


$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $("header").addClass("sticky");
    }
    else {
        $("header").removeClass("sticky");
    }
});


// Nav-bar

let savedScrollPosition = 0;

function showSidebar() {
  const sidebar = document.querySelector('.side-bar')
  sidebar.style.display = 'flex'
  
  
}

function hideSidebar() {
  const sidebar = document.querySelector('.side-bar')
  savedScrollPosition = window.scrollY || window.pageYOffset;
  window.scrollTo(0, savedScrollPosition);
  sidebar.style.display = 'none'
  
}




// tips

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".exp-section");
  
    sections.forEach(section => {
      const header = section.querySelector("h3");
      const content = section.querySelector(".exp-content");
  
      header.addEventListener("click", function() {
        section.classList.toggle("active");
        content.style.display = section.classList.contains("active") ? "block" : "none";
      });
    });
  });