document.querySelector(".items").innerHTML += ItemsUI("./imgs/bottle.png", "Beverage Bottles", 0);
document.querySelector(".items").innerHTML += ItemsUI("./imgs/can.png",  "Beverage Cans");
document.querySelector(".items").innerHTML += ItemsUI("./imgs/caps.png", "Caps and Lips", 0);
document.querySelector(".items").innerHTML += ItemsUI("./imgs/cigarette.png",  "Cigarettes", 10);
document.querySelector(".items2").innerHTML += ItemsUI("./imgs/mask.png", "Face Masks", -20);
document.querySelector(".items2").innerHTML += ItemsUI("./imgs/plasticbag.png", "Plastic Bags", -20);
document.querySelector(".items2").innerHTML += ItemsUI("./imgs/straw.png", "Straws");
document.querySelector(".items2").innerHTML += ItemsUI("./imgs/wrapper.png", "Food Wrapper", 150);
document.querySelector(".garden").innerHTML += GardenUI();