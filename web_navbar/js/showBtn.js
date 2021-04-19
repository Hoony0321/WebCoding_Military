let showMenuBtn = document.querySelector(".showMenuBtn");
let menu = document.querySelector(".menu");
let sns = document.querySelector(".sns");

showMenuBtn.addEventListener("click", showMenubar);


var menuIsVisible = true;
function showMenubar(){  
    if(menuIsVisible){
        menu.style.display = 'none';
        sns.style.display = 'none';
        menuIsVisible = false;
    }
    else{
        menu.style.display = 'block';
        sns.style.display = 'block';
        menuIsVisible = true;
    }
    
}