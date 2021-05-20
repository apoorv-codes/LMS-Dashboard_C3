var sideNavButton = document.getElementsByClassName("side_nav_icons");
var leftSection = document.getElementById("left-section");
var menuHamburger = document.getElementById("ham");

for (let index = 0; index < sideNavButton.length; index++) {
    const element = sideNavButton[index];
    element.addEventListener('click',()=>{
        var activeElement = document.getElementsByClassName("active");
        activeElement[0].classList.remove("active");
        element.classList.add("active");
    });
}


menuHamburger.addEventListener("click", () => {
    if (leftSection.classList.contains("left-section")) {
        leftSection.classList.add("responsive");
      } else {
        leftSection.classList.remove("responsive");
      }
  });