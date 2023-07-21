let changeMoodBtn = document.querySelector("#changeMoodBtn")
let r = document.querySelector(":root")
let flagMood = true
changeMoodBtn.addEventListener("click", () => {
    if (flagMood) {
        flagMood = false
        changeMoodBtn.setAttribute("src", "./images/light moon.svg")
        r.style.setProperty('--white', '#050519');
        r.style.setProperty('--black', '#fff');
        r.style.setProperty('--gray', '#282C34');
        r.style.setProperty('--subTitle', '#fff');
        r.style.setProperty('--blue', '#3040E5');
        document.querySelector("header").style.background = "#000"

    } else {
        flagMood = true
        changeMoodBtn.setAttribute("src", "./images/black moon.svg")
        r.style.setProperty('--white', '#fff');
        r.style.setProperty('--black', '#000000');
        r.style.setProperty('--gray', '#f2f2f7');
        r.style.setProperty('--subTitle', '#2c2c2e');
        r.style.setProperty('--blue', '#3040e5');
        document.querySelector("header").style.background = "#fff"
    }
})

// open and close nemu
let menu = document.querySelector(".header-items")
let isMenuOpen = false
let openMenubtn = document.querySelector(".header-items button")
openMenubtn.addEventListener("click", openAndCloseMenu)

function openAndCloseMenu() {
    if (!isMenuOpen) {
        isMenuOpen = true
        menu.classList.add("header-items-menu-opening")
        openMenubtn.innerHTML = "X"
        openMenubtn.style.fontSize = "1.5rem"
    }
    else {
        isMenuOpen = false
        menu.classList.remove("header-items-menu-opening")
        openMenubtn.innerHTML = "menu"
        openMenubtn.style.fontSize = "1rem"

    }
}
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("header-items-menu-opening")
        openMenubtn.innerHTML = "menu"
        openMenubtn.style.fontSize = "1rem"
    }
})