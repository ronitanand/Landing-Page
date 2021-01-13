const menu=document.querySelector(".hamburger");
menu.addEventListener("click",()=>{
let menunav=document.querySelector(".collapse");
if(menunav.style.display==="none"){
    menunav.style.display="block";
}
else {
    menunav.style.display="none";
}



})
