var sideNavButton = document.getElementsByClassName("side_nav_icons");

for (let index = 0; index < sideNavButton.length; index++) {
    const element = sideNavButton[index];
    element.addEventListener('click',()=>{
        var activeElement = document.getElementsByClassName("active");
        activeElement[0].classList.remove("active");
        element.classList.add("active");
    });
}