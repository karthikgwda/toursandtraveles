/* ============================
   MOBILE MENU
============================ */


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



menuBtn.addEventListener("click", () => {


    navLinks.classList.toggle("active");


});





/* ============================
   CLOSE MENU AFTER CLICK
============================ */


const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


    });


});







/* ============================
   NAVBAR SHADOW ON SCROLL
============================ */


const navbar = document.querySelector(".navbar");



window.addEventListener("scroll", () => {


    if(window.scrollY > 50){


        navbar.style.background = "#ffffff";


        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.15)";


    }

    else{


        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";


    }


});








/* ============================
   SCROLL REVEAL ANIMATION
============================ */


const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform="translateY(0)";


    }


});



},{

    threshold:0.15

});





sections.forEach(section=>{


    section.style.opacity="0";


    section.style.transform="translateY(50px)";


    section.style.transition="all 0.8s ease";


    observer.observe(section);


});









/* ============================
   BOOKING BUTTON
============================ */


const bookingButtons =
document.querySelectorAll(".package-card button");



bookingButtons.forEach(button=>{


button.addEventListener("click",()=>{


    alert(
    "Thank you for choosing Mysore Royal Tours! Our team will contact you shortly."
    );


});


});









/* ============================
   CURRENT YEAR FOOTER
============================ */


const year =
new Date().getFullYear();


const footerText =
document.querySelector("footer p:last-child");



if(footerText){


footerText.innerHTML =
`© ${year} Mysore Royal Tours. All Rights Reserved.`;


}