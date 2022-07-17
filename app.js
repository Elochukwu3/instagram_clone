let firstSection = document.querySelector(".first-section");
let staticSection = document.querySelector(".static-sidePage");
window.addEventListener("scroll",function () {
    if (scrollY >= 100) {
        firstSection.style.position = "fixed";
        // staticSection.style.position = "static";
    } else{
        firstSection.style.position = "static";
        // staticSection.style.position = "fixed";
    }
    // console.log(firstSection);
});
let icon = document.querySelector(".blue-icon");
let colors = ["red", "black", "snow", "grey"];
let container = document.querySelector(".page-container");
icon.addEventListener("click", function () {
    let color = colors[Math.floor(Math.random()* colors.length)];
    // console.log(color);
    if (color === "snow") {
        // console.log("work");
        container.style.color = "black"; 
        container.style.background = color;
    }else{
        
        container.style.background = color;
    }
})
// view post in desktop
let popUp = document.querySelector("#overlay-drop");
function postOpen(){
    popUp.style.height = "100%";
}
function closePage(){
    popUp.style.height = "0%";
}
//  slider
// let slider = document.querySelectorAll(".second-section");
//   position = 0;
//   function activator() {

//       for (let i = 0; i < slider.length; i++) {
//           slider[i].style.display = "none";
//         // console.log(slider);
//       }
//       position++
//       if (position > slider.length) {
//         position = 1
//     }
//       slider[position - 1].style.display = "flex";
//   }
//   setInterval(() => {
//       activator()
//   }, 2000);