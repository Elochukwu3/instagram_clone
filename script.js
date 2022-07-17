// declaration of variables

let firstSection = document.querySelector(".first-section");
let hamburger = document.querySelector(".hamburger");
let ham = document.querySelector(".ham");
let popup = document.querySelector(".popup");
let last = document.querySelector(".last-sect");

window.addEventListener("scroll", function () {
    // scrollY = 400;
    if (scrollY >= 100) {
        firstSection.style.position = "fixed";
        // console.log(scrollY);
    } else {
        firstSection.style.position = "static";
    }
   
});

// let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    popup.classList.toggle("show");
    let show = document.querySelector(".show")

});

let dash = document.querySelector(".dash-click");
dash.addEventListener("click", function () {
    
    // popup.classList.toggle("show");
    popup.classList.remove("show");
   
});
ham.addEventListener("click", function () {
    popup.classList.toggle("show");
});
let roll = document.querySelector(".all2");
let gallery = document.querySelector(".second-gallery");
let firstSlide = document.querySelector(".insta-pictures");
roll.addEventListener("click", function () {
  gallery.style.width = "100%";

});
document.querySelector(".all3").addEventListener("click", function () {
  gallery.style.width = "100%";

});
document.querySelector(".tag1").addEventListener("click", function () {
  gallery.style.width = "100%";

});
document.querySelector(".times").addEventListener("click", function () {
  gallery.style.width = "0px";

});


