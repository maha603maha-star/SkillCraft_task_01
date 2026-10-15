const navbar = document.getElementById("navbar");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


window.addEventListener("scroll", function () {

    

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }


    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});