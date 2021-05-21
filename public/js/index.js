var sideNavButton = document.getElementsByClassName("side_nav_icons");
var leftSection = document.getElementById("left-section");
var menuHamburger = document.getElementById("ham");
var main = document.getElementById("main-content");
var sideBar = document.getElementById("side-bar");

for (let index = 0; index < sideNavButton.length; index++) {
    const element = sideNavButton[index];
    element.addEventListener('click',()=>{
        var activeElement = document.getElementsByClassName("active");
        activeElement[0].classList.remove("active");
        element.classList.add("active");
    });
}


menuHamburger.addEventListener("click", () => {
    if (leftSection.style.display !== "block") {
        leftSection.style.display = "block";
        leftSection.style.zIndex = "2";
        leftSection.style.position = "absolute";
        leftSection.style.margin = "2rem";
        leftSection.style.width = "100vw";
        sideBar.style.width = "100%";
        main.style.filter = "blur(8px)";
        leftSection.classList.remove("item");

      } else {
        leftSection.style.position = "";
        leftSection.style.display = "";
        leftSection.classList.add("item");
        main.style.filter = "";
        leftSection.style.margin = "";
      }
  });