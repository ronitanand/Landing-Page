const menu=document.querySelector(".hamburger");
menu.addEventListener("click",()=>{
let menunav=document.querySelector(".collapse");

if(menunav.style.display=="none"){
    menunav.style.display="block";
}
else {
    menunav.style.display="none";
}
});
const x = window.matchMedia("(max-width: 1000px)");
const dot1=document.querySelector(".dot1");
const dot2=document.querySelector(".dot2");
const dot3=document.querySelector(".dot3");
const dot_pair=document.querySelector(".dot-pair");
const y = window.matchMedia("(min-width: 1000px)");

funn(x);
x.addEventListener("change",myfunctionn);
y.addEventListener("change",anotherff);

function funn(m){
    if(m.matches){
    dot2.addEventListener("click",(event)=>{
        let content=`
        <div class="slide2" style="display:block;">
             <img src="images/avatar-richard.png">
             <h3>Richard Watts</h3>
             <p>Manage allows us to provide structure and process. It keeps us organized 
              and focused. I can’t stop recommending them to everyone I talk to!</p>
        
           </div>`;
           document.querySelector(".slideshow").innerHTML=content;
           dot1.style.backgroundColor="rgb( 240, 238, 238)";
           event.target.style.backgroundColor="grey";
           dot3.style.backgroundColor="rgb( 240, 238, 238)";
        
        });
        
        dot3.addEventListener("click",(event)=>{
            let content=`
            <div class="slide3" style="display:block;">
            <img src="images/avatar-ali.png">
            <h3>Ali Bravo</h3>
            <p>We have been able to cancel so many other subscriptions since using 
             Manage. There is no more cross-channel confusion and everyone is much 
             more focused.</p>
            </div>`;
            document.querySelector(".slideshow").innerHTML=content;
            dot1.style.backgroundColor="rgb( 240, 238, 238)";
            dot2.style.backgroundColor="rgb( 240, 238, 238)";
            event.target.style.backgroundColor="grey";
        

        })
        dot1.addEventListener("click",(event)=>{
            let content=`
            <div class="slide1" style="diplay:block;">
             <img src="images/avatar-anisha.png">
             <h3>Anisha Li</h3>
             <p>Manage has supercharged our team’s workflow. The ability to maintain 
              visibility on larger milestones at all times keeps everyone motivated.</p>
        
        
           </div>`;
            document.querySelector(".slideshow").innerHTML=content;
            dot2.style.backgroundColor="rgb( 240, 238, 238)";
            dot3.style.backgroundColor="rgb( 240, 238, 238)";
            event.target.style.backgroundColor="grey";
        
        
        })
    
    
    
    }}
function myfunctionn(){
dot2.addEventListener("click",(event)=>{
let content=`
<div class="slide2" style="display:block;">
     <img src="images/avatar-richard.png">
     <h3>Richard Watts</h3>
     <p>Manage allows us to provide structure and process. It keeps us organized 
      and focused. I can’t stop recommending them to everyone I talk to!</p>

   </div>`;
   document.querySelector(".slideshow").innerHTML=content;
   dot1.style.backgroundColor="rgb( 240, 238, 238)";
   event.target.style.backgroundColor="grey";
   dot3.style.backgroundColor="rgb( 240, 238, 238)";

})

dot3.addEventListener("click",(event)=>{
    let content=`
    <div class="slide3" style="display:block;">
    <img src="images/avatar-ali.png">
    <h3>Ali Bravo</h3>
    <p>We have been able to cancel so many other subscriptions since using 
     Manage. There is no more cross-channel confusion and everyone is much 
     more focused.</p>
    </div>`;
    document.querySelector(".slideshow").innerHTML=content;
    dot1.style.backgroundColor="rgb( 240, 238, 238)";
    dot2.style.backgroundColor="rgb( 240, 238, 238)";
    event.target.style.backgroundColor="grey";



})

dot1.addEventListener("click",(event)=>{
    let content=`
    <div class="slide1" style="diplay:block;">
     <img src="images/avatar-anisha.png">
     <h3>Anisha Li</h3>
     <p>Manage has supercharged our team’s workflow. The ability to maintain 
      visibility on larger milestones at all times keeps everyone motivated.</p>


   </div>`;
    document.querySelector(".slideshow").innerHTML=content;
    dot2.style.backgroundColor="rgb( 240, 238, 238)";
    dot3.style.backgroundColor="rgb( 240, 238, 238)";
    event.target.style.backgroundColor="grey";


})}

 function anotherff(){
    let newcontent=`<div class="slide1">
    <img src="images/avatar-anisha.png">
    <h3>Anisha Li</h3>
    <p>Manage has supercharged our team’s workflow. The ability to maintain 
     visibility on larger milestones at all times keeps everyone motivated.</p>


  </div>
  <div class="slide2">
    <img src="images/avatar-richard.png">
    <h3>Richard Watts</h3>
    <p>Manage allows us to provide structure and process. It keeps us organized 
     and focused. I can’t stop recommending them to everyone I talk to!</p>

  </div>
  <div class="slide3">
    <img src="images/avatar-ali.png">
    <h3>Ali Bravo</h3>
    <p>We have been able to cancel so many other subscriptions since using 
     Manage. There is no more cross-channel confusion and everyone is much 
     more focused.</p>



  </div>`
    document.querySelector(".slideshow").innerHTML=newcontent;
}
 
        