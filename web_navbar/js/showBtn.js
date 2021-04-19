let showMenubarBtn = document.getElementsByClassName("showMenuBtn")[0];
let menubar = document.getElementsByClassName("addMenubar")[0];

showMenubarBtn.addEventListener("click", showMenubar)

var display_none = true;
function showMenubar{  
    if(display_none){menubar.style.display ="block"; display_none = false;} 
    else {menubar.style.display="none"; display_none = true;}
}