function OnClickMenuToggle(){
    var active=document.getElementsByClassName("navbar-top-menu-toggle-icon")[0];
    
    console.log("MenuToggleMessage :: Clicked");
    var labels=document.getElementsByClassName("navbar-left-menu-item-link-label");
    if (active.classList.contains('navbar-top-menu-toggle-icon-switch')) {
        active.classList.remove('navbar-top-menu-toggle-icon-switch');
        for (const label of labels) {
            label.classList.remove('navbar-left-menu-item-link-label-switch');
        }
    }
    else{
        active.classList.add('navbar-top-menu-toggle-icon-switch');
        for (const label of labels) {
            label.classList.add('navbar-left-menu-item-link-label-switch');
        }
    }
}

function skillScrollLeft(){
    document.getElementsByClassName("main-container-skill-hwidget-card-container")[0].scrollLeft -=300;
     
}
function skillScrollRight(){
    document.getElementsByClassName("main-container-skill-hwidget-card-container")[0].scrollLeft +=300;
    
    
}

// for this to run the javascript file needs to be call at the last of html page
const slider = document.querySelector(".main-container-skill-hwidget-card-container");
// console.log(slider);
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    // console.log("mousedown");
    isDown = true;
    //   slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    // console.log("mouseleave");
    isDown = false;
    //   slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    // console.log("mouseup");
    isDown = false;
    //   slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    // console.log("mousemove");
    if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
});


function arcLoad(classDiv,angle,text){
    // console.log("Yes",classDiv.innerHTML);
    var total=10;
    var deg=(text/total)*Math.PI;

    var height=100+30;//y
    var width=150;//x
    var context = classDiv.getContext("2d");

    context.lineCap = "round";
    context.lineWidth=30;
    
    context.beginPath();
    context.strokeStyle = 'grey';
    context.arc(width, height, 100,- Math.PI,0);
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(width, height, 100,- Math.PI,-Math.PI+deg);
    context.stroke();
    
    // context.beginPath();
    context.font = "40px Monoton";
    // context.fillText(".", 145, height);
    context.fillText(text+"/"+total, width-((text+"/"+total).length/2)*20, height);
    // context.fill();
}


const arcList=document.getElementsByClassName("main-container-skill-hwidget-card-arc");
console.log(arcList);
for (const arc of arcList) {
    arcLoad(arc,180,arc.innerHTML);
}
function OnLoadFunctions(){
    
}