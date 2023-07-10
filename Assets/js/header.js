let menu = document.querySelector(".menu");
let mydiv = document.createElement("div");
mydiv.style.display = " display: block;";
let myNav = document.getElementsByTagName("nav");
// console.log(myNav);
menu.addEventListener("click", () => {
    if( myNav[0].style.display=="none")
        myNav[0].style.cssText = " display: block;";
    else
        myNav[0].style.cssText = " display: none;";
});

