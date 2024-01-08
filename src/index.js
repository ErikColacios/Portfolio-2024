// Navbar burger
let burger = document.getElementById("burger");

// Hidden navbar (appears in smaller viewports)
let navItemsHidden = document.getElementById("navItemsHidden");

// Project divs
let divVideo1 = document.getElementById("divVideo1");
let divVideo2 = document.getElementById("divVideo2");
let divVideo3 = document.getElementById("divVideo3");
let divVideo4 = document.getElementById("divVideo4");

// Video screen
let video = document.getElementById("videoPantalla");


burger.addEventListener("click",()=>{
    if(navItemsHidden.classList.contains("hidden")){
        navItemsHidden.classList.remove("hidden")
    }else{
        navItemsHidden.classList.add("hidden")
    }
})

divVideo1.addEventListener("click",()=>{
    divVideo2.classList.remove("outline");
    divVideo3.classList.remove("outline");
    divVideo4.classList.remove("outline");
    video.src = "/src/videos/fustadecor_video.mp4";
    divVideo1.classList.add("outline");
})

divVideo2.addEventListener("click",()=>{
    divVideo1.classList.remove("outline");
    divVideo3.classList.remove("outline");
    divVideo4.classList.remove("outline");
    video.src = "/src/videos/onepieceapp_video.mp4";
    divVideo2.classList.add("outline");
})

divVideo3.addEventListener("click",()=>{
    divVideo1.classList.remove("outline");
    divVideo2.classList.remove("outline");
    divVideo4.classList.remove("outline");
    video.src = "/src/videos/randompass_video.mp4";
    divVideo3.classList.add("outline");
})

divVideo4.addEventListener("click",()=>{
    divVideo1.classList.remove("outline");
    divVideo2.classList.remove("outline");
    divVideo3.classList.remove("outline");
    video.src = "/src/videos/greendrop_video.mp4";
    divVideo4.classList.add("outline");
})