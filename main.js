function OnLoadFunctions(){
    loadSkillToHTML();
    loadProjectToHTML();
    // loadExpToHTML();
    // loadAchievementToHTML();
}
window.onscroll=function(){
    navbarBG();
}

function searchSubmit(){
    let keyword=document.getElementsByClassName("navbar-top-searchbox-input")[0];
    console.log(keyword.value);
    console.log("Search Feature :: Working In Progress")
    // var word = keyword,
    //     queue = [document.body],
    //     curr
    // ;
    // while (curr = queue.pop()) {
    //     if (!curr.textContent.match(word)) continue;
    //     for (var i = 0; i < curr.childNodes.length; ++i) {
    //         switch (curr.childNodes[i].nodeType) {
    //             case Node.TEXT_NODE : // 3
    //                 if (curr.childNodes[i].textContent.match(word)) {
    //                     console.log("Found!");
    //                     console.log(curr);
    //                     // you might want to end your search here.
    //                     return undefined;
    //                 }
    //                 break;
    //             case Node.ELEMENT_NODE : // 1
    //                 queue.push(curr.childNodes[i]);
    //                 break;
    //         }
    //     }
    // }
    // note :: after search is done then scrollintoview() method will scroll to that location
}
function OnClickMenuToggle(){
    menuToggle=document.getElementsByClassName("navbar-top-menu-toggle-icon")[0];
    
    console.log("MenuToggleMessage :: Clicked");
    var labels=document.getElementsByClassName("navbar-left-menu-item-link-label");
    if (menuToggle.classList.contains('navbar-top-menu-toggle-icon-switch')) {
        menuToggle.classList.remove('navbar-top-menu-toggle-icon-switch');
        for (const label of labels) {
            label.classList.remove('navbar-left-menu-item-link-label-switch');
        }
    }
    else{
        menuToggle.classList.add('navbar-top-menu-toggle-icon-switch');
        for (const label of labels) {
            label.classList.add('navbar-left-menu-item-link-label-switch');
        }
    }
}
function OnClickMenuToggleOff(){
    var labels=document.getElementsByClassName("navbar-left-menu-item-link-label");
    menuToggle.classList.remove('navbar-top-menu-toggle-icon-switch');
    for (const label of labels) {
        label.classList.remove('navbar-left-menu-item-link-label-switch');
    }
}

function skillScrollLeft(element){
    document.getElementsByClassName("main-container-skill-hwidget-card-container")[0].scrollLeft -=window.screen.width/3;
    // console.log(element.parentElement); 
}

function skillScrollRight(element){
    // console.log(element); 
    document.getElementsByClassName("main-container-skill-hwidget-card-container")[0].scrollLeft +=window.screen.width/3;
}

function arcLoad(classDiv,text,total){

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

}

function loadSkillToHTML(){
    var skillElementDiv=document.getElementById("skills")
    // console.log(skillElementDiv);
    for (const skillcat in myskills) {
        // console.log(skillcat,myskills);
        var categoryDiv=document.createElement("div");
        categoryDiv.classList.add("main-container-skill-container");
        
        var label=document.createElement("span");
        label.classList.add("main-container-skill-container-title");
        label.innerHTML=skillcat;
        categoryDiv.appendChild(label);

        var hwidget=document.createElement("div");
        hwidget.classList.add("main-container-skill-hwidget");
        
        var hwidget_lbutton=document.createElement("div");
        hwidget_lbutton.classList.add("main-container-skill-hwidget-button");
        hwidget_lbutton.setAttribute("onclick",'skillScrollLeft(this)');
        var lbtn_icon=document.createElement("i");
        lbtn_icon.classList.add("fa");
        lbtn_icon.classList.add("fa-angle-left");
        lbtn_icon.classList.add("fa-3x");
        hwidget_lbutton.appendChild(lbtn_icon);

        var hwidget_rbutton=document.createElement("div");
        hwidget_rbutton.classList.add("main-container-skill-hwidget-button");
        hwidget_rbutton.setAttribute("onclick",'skillScrollRight(this)');
        var rbtn_icon=document.createElement("i");
        rbtn_icon.classList.add("fa");
        rbtn_icon.classList.add("fa-angle-right");
        rbtn_icon.classList.add("fa-3x");
        hwidget_rbutton.appendChild(rbtn_icon);

        var hwidget_card_contiainer=document.createElement("div");
        hwidget_card_contiainer.classList.add("main-container-skill-hwidget-card-container");
        // hwidget_card_contiainer.onmouseenter=hwidgetMouseEnter;
        // console.log(hwidget_card_contiainer);

        for(var pskill in myskills[skillcat]){

            var hwidget_card=document.createElement("div");
            hwidget_card.classList.add("main-container-skill-hwidget-card");
            hwidget_card.setAttribute("id",myskills[skillcat][pskill]["key"]);
            
            var canavas=document.createElement("canvas");
            canavas.classList.add("main-container-skill-hwidget-card-arc");
            arcLoad(canavas,myskills[skillcat][pskill]["rate"],myskills[skillcat][pskill]["scale"]);
            hwidget_card.appendChild(canavas);
            
            var card_labelbox=document.createElement("div");
            card_labelbox.classList.add("main-container-skill-hwidget-card-labelbox");
            
            var card_labelbox_img=document.createElement("img");
            card_labelbox_img.classList.add("main-container-skill-hwidget-card-labelbox-img");
            card_labelbox_img.alt=myskills[skillcat][pskill]["img"]["alt"];
            if(myskills[skillcat][pskill]["img"]["url"])
                card_labelbox_img.src=myskills[skillcat][pskill]["img"]["url"];
            card_labelbox.appendChild(card_labelbox_img);
            
            var card_labelbox_text=document.createElement("span");
            card_labelbox_text.classList.add("main-container-skill-hwidget-card-labelbox-text");
            card_labelbox_text.innerHTML=myskills[skillcat][pskill]["label"];
            card_labelbox.appendChild(card_labelbox_text);


            hwidget_card.appendChild(card_labelbox);
            
            var card_description=document.createElement("span");
            card_description.classList.add("main-container-skill-hwidget-card-description");
            card_description.innerHTML=myskills[skillcat][pskill]["description"];
            hwidget_card.appendChild(card_description);

            hwidget_card_contiainer.appendChild(hwidget_card);
        }

        hwidget.appendChild(hwidget_lbutton);
        hwidget.appendChild(hwidget_card_contiainer);
        hwidget.appendChild(hwidget_rbutton);

        categoryDiv.appendChild(hwidget);
        skillElementDiv.appendChild(categoryDiv);
    }
}

function loadProjectToHTML(){
    var projectElementDiv=document.getElementById("project");
    var projectContainer=document.createElement("div");
    projectContainer.classList.add("main-container-projectbox");

    for (const project of myprojects) {
        var projectElement=document.createElement("div");
        projectElement.classList.add("main-container-projectbox-elementbox");

        var projectimg=document.createElement("img");
        projectimg.classList.add("main-container-projectbox-element-img");
        // for now considering only 1 image
        projectimg.setAttribute("src",project["img"][0]["url"]);
        projectimg.setAttribute("alt",project["img"][0]["alt"]);

        var projecttextcontainer=document.createElement("div");
        projecttextcontainer.classList.add("main-container-projectbox-element-textcontainer");

        var textcontainertitle=document.createElement("span");
        textcontainertitle.classList.add("main-container-projectbox-element-textcontainer-title");
        textcontainertitle.innerHTML=project["title"];

        var textcontainerdescription=document.createElement("p");
        textcontainerdescription.classList.add("main-container-projectbox-element-textcontainer-description");
        textcontainerdescription.innerHTML=project["description"];

        var textcontainerdate=document.createElement("span");
        textcontainerdate.classList.add("main-container-projectbox-element-textcontainer-date");
        textcontainerdate.innerHTML=project["date"];

        var textcontainerlinkbox=document.createElement("div");
        textcontainerlinkbox.classList.add("main-container-projectbox-element-textcontainer-linkbox");
        for (const link of project["url"]) {
            if(link["link"]==undefined){continue;}
            var textcontainerlink=document.createElement("a");
            textcontainerlink.classList.add("main-container-projectbox-element-textcontainer-link");
            textcontainerlink.setAttribute("href",link["link"]);
            textcontainerlink.innerHTML=link["link-text"];

            textcontainerlinkbox.appendChild(textcontainerlink);
        }

        var textcontainerskillbox=document.createElement("div");
        textcontainerskillbox.classList.add("main-container-projectbox-element-textcontainer-skillbox");
        var textcontainerskillboxlabel=document.createElement("span");
        textcontainerskillboxlabel.classList.add("main-container-projectbox-element-textcontainer-skill-label");
        textcontainerskillboxlabel.innerHTML="Skills : ";

        textcontainerskillbox.appendChild(textcontainerskillboxlabel);
        // console.log(project["skills"]);
        for (const skill of project["skills"]) {
            var textcontainerskilllink=document.createElement("a");
            textcontainerskilllink.classList.add("main-container-projectbox-element-textcontainer-skill-link");
            
            textcontainerskilllink.setAttribute("href","#"+skill["key"]);
            var textcontainerskillimg=document.createElement("img");
            textcontainerskillimg.classList.add("main-container-projectbox-element-textcontainer-skill-img");
            
            // console.log("imgdetails :",skill["img"]["url"]);
            textcontainerskillimg.setAttribute("src",skill["img"]["url"]);

            textcontainerskillimg.setAttribute("alt",skill["img"]["alt"]);
            
            textcontainerskilllink.appendChild(textcontainerskillimg);
            textcontainerskillbox.appendChild(textcontainerskilllink);
        }

        projecttextcontainer.appendChild(textcontainertitle);
        projecttextcontainer.appendChild(textcontainerdate);
        projecttextcontainer.appendChild(textcontainerdescription);
        projecttextcontainer.appendChild(textcontainerlinkbox);
        projecttextcontainer.appendChild(textcontainerskillbox);

        projectElement.appendChild(projectimg);
        projectElement.appendChild(projecttextcontainer);

        projectContainer.appendChild(projectElement);
    }
    projectElementDiv.appendChild(projectContainer);
}
function loadExpToHTML(){
    var expElementDiv=document.getElementById("exp");
    var expBox=document.createElement("div");
    expBox.classList.add("main-container-expbox");



    expElementDiv.appendChild(expBox);
}
function loadAchievementToHTML(){
    var achieveElementDiv=document.getElementById("achieve");
}
function navbarBG(){
    // console.log(window.scrollY);
    if(window.scrollY>200){
        document.getElementsByClassName("navbar-top")[0].classList.add("navbar-top-bg-toggle");
    }
    else{
        document.getElementsByClassName("navbar-top")[0].classList.remove("navbar-top-bg-toggle");
    }
}
// // for this to run the javascript file needs to be call at the last of html page
// const slider = document.querySelector(".main-container-skill-hwidget-card-container");
// console.log(slider);

// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     //   slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     //   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     //   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//     if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// //   console.log(walk);
// });