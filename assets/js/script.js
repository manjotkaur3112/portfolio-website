document.querySelector("button").addEventListener("click", () => {
    window.print();
})

var menuBar = document.querySelector(".menu-bar");
var menuSection = document.querySelector(".menu-section");
menuBar.addEventListener("click", () => {
    menuBar.style.display = "none";
    menuSection.style.display = "block";
})


var closeButton = document.querySelector(".close-button")
var count = 0;

closeButton.addEventListener("click",() => {
    if(count%2==0){
        closeButton.style.display = "block";
        menuSection.style.display = "block";
        menuBar.style.display = "none";
    } else {
        menuBar.style.display = "block";
        closeButton.style.display = "block";
        menuSection.style.display = "none";
    }
    count++;
});