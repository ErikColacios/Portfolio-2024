let burger = document.getElementById("burger");
let navItemsHidden = document.getElementById("navItemsHidden");

burger.addEventListener("click",()=>{
    if(navItemsHidden.classList.contains("hidden")){
        navItemsHidden.classList.remove("hidden")
    }else{
        navItemsHidden.classList.add("hidden")
    }
    
})