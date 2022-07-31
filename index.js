
const hideText = document.querySelector(".text")
const btnWrap = document.querySelector("#btn")
const button = document.querySelector("button")

const topSectionWrap = document.querySelector(".top")
const row1 = document.querySelectorAll(".row-1")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const box6 = document.getElementById("box6")


const midSectionWrap = document.querySelector(".mid")
const row2 = document.querySelectorAll(".row-2")

const bottomSectionWrap = document.querySelector(".bottom")
const row3 = document.querySelector(".row-3")

// when you click on the button change hideText to white

// and change all div backgrounds to black with blue borders? 


// link btn 
const btn = document.getElementById("hi-contrast")

function highContrastMode(){
    hideText.classList.toggle("show")
    btnWrap.classList.toggle("contrast")
    button.classList.toggle("contrast")
    
    topSectionWrap.classList.toggle("contrast")
    midSectionWrap.classList.toggle("contrast")
    bottomSectionWrap.classList.toggle("contrast")

    box1.classList.toggle("contrast")
    box2.classList.toggle("contrast")
    box3.classList.toggle("contrast")
    box4.classList.toggle("contrast")
    box5.classList.toggle("contrast")
    box6.classList.toggle("contrast")
}

