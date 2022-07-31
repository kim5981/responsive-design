
const hideText = document.querySelector(".text")
const btnWrap = document.querySelector("#btn")

const topSectionWrap = document.querySelector(".top")
const row1 = document.querySelectorAll(".row-1")

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
    btnWrap.classList.toggle("contrast");
    
}

