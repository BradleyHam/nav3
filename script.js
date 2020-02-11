let hamburger = document.getElementById("hamburger");
let dropdown = document.getElementById("dropdown");


function dropDownMenu() {
    dropdown.classList.toggle("vis")
}


hamburger.addEventListener("click", (e) => {
    dropDownMenu()
})