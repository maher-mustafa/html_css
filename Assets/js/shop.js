let items = document.querySelectorAll(".item");
let heart = document.querySelector(".heart");
let price = 3.600;
for (var i = 1; i < 5; i++){
    items[i].style.cssText = ` position: relative;`;
    let myCopy = heart.cloneNode(true);
    myCopy.lastElementChild.textContent = `$${price+150}`;
    items[i].appendChild(myCopy);
    price += 150;
}
