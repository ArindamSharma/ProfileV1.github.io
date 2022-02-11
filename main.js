// Global Variables
var menuToggle;
// var scrollLocation=window.scrollY;


function OnLoadFunctions(){
    loadSkillToHTML();
    loadProjectToHTML();
    loadExpToHTML();
    loadAchievementToHTML();
    loadContactToHTML();
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
function rbgForPercentage(percentage){
    // red to yellow to green
    // (r,g,b)
    // Red 255, 0, 0.
    // Yellow 255, 255, 0. 
    // Green 0, 255, 0
    var r=0,g=0,b=0;
    if(percentage<=0.5){
        r=255; // b=0
        g=percentage*2*255;
        b=0;
    }
    else{
        r=(1-percentage)*2*255;
        g=255;
        b=0;
    }
    return "rgb("+r+","+g+","+b+")";
    
}
function arcLoad(classDiv,text,total){

    var deg=(text/total)*Math.PI;

    var height=100+30;//y
    var width=150;//x
    var context = classDiv.getContext("2d");

    context.lineCap = "round";
    context.lineWidth=30;
    
    context.beginPath();
    context.strokeStyle = 'rgb(209, 209, 209)'; //background
    context.arc(width, height, 100,- Math.PI,0);
    context.stroke();
    
    context.beginPath();
    // console.log(rbgForPercentage(text/total));
    // context.strokeStyle = 'rgb(153.00000000000003,101.99999999999997,0)'; //progress
    context.strokeStyle = rbgForPercentage(text/total); //progress
    context.arc(width, height, 100,- Math.PI,-Math.PI+deg);
    context.stroke();
    
    // context.beginPath();
    context.font = "40px Monoton";
    // context.fillText(".", 145, height);
    context.fillText(text+"/"+total, width-((text+"/"+total).length/2)*20, height);

}
function elementCreator(element,classlist=[],attributelist=[],text="",childrenlist=[]){
    var x=document.createElement(element);
    classlist.forEach(classname => {x.classList.add(classname);});
    // for (const myclass of classlist) {x.classList.add(myclass);}
    attributelist.forEach(obj=>{for (const key in obj) {
        x.setAttribute(key,obj[key]);
    }})
    // for (const key in attributelist) {
    //     x.setAttribute(key,attributelist[key]);
    // }
    x.innerHTML=text;
    for (const children of childrenlist) {x.appendChild(children)}
    return x;
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
        if(project["img"][0]["url"]==undefined)
            projectimg.setAttribute("src","./img/na.jpg");

        projectElement.appendChild(projectimg);
        // var projecttextcontainer=document.createElement("div");
        // projecttextcontainer.classList.add("main-container-projectbox-element");

        var textcontainertitle=document.createElement("span");
        textcontainertitle.classList.add("main-container-projectbox-element-title");
        textcontainertitle.innerHTML=project["title"];
        projectElement.appendChild(textcontainertitle);

        var textcontainerdate=document.createElement("span");
        textcontainerdate.classList.add("main-container-projectbox-element-date");
        textcontainerdate.innerHTML=project["date"];
        projectElement.appendChild(textcontainerdate);

        var textcontainerdescription=document.createElement("p");
        textcontainerdescription.classList.add("main-container-projectbox-element-description");
        textcontainerdescription.innerHTML=project["description"];
        projectElement.appendChild(textcontainerdescription);

        var textcontainerlinkbox=document.createElement("div");
        textcontainerlinkbox.classList.add("main-container-projectbox-element-linkbox");
        for (const link of project["url"]) {
            if(link["link"]==undefined){continue;}
            var textcontainerlink=document.createElement("a");
            textcontainerlink.classList.add("main-container-projectbox-element-link");
            textcontainerlink.setAttribute("href",link["link"]);
            textcontainerlink.innerHTML=link["link-text"];

            textcontainerlinkbox.appendChild(textcontainerlink);
        }
        projectElement.appendChild(textcontainerlinkbox);
        
        // console.log(project);
        if(project["skills"].length!=0){
            var textcontainerskillbox=document.createElement("div");
            textcontainerskillbox.classList.add("main-container-projectbox-element-skillbox");

            var textcontainerskillboxlabel=document.createElement("span");
            textcontainerskillboxlabel.classList.add("main-container-projectbox-element-skill-label");
            textcontainerskillboxlabel.innerHTML="Skills : ";
            
            textcontainerskillbox.appendChild(textcontainerskillboxlabel);
            // console.log(project["skills"]);
            for (const skill of project["skills"]) {
                var textcontainerskilllink=document.createElement("a");
                textcontainerskilllink.classList.add("main-container-projectbox-element-skill-link");
                
                textcontainerskilllink.setAttribute("href","#"+skill["key"]);
                var textcontainerskillimg=document.createElement("img");
                textcontainerskillimg.classList.add("main-container-projectbox-element-skill-img");
                
                // console.log("imgdetails :",skill["img"]["url"]);
                textcontainerskillimg.setAttribute("src",skill["img"]["url"]);

                textcontainerskillimg.setAttribute("alt",skill["img"]["alt"]);
                
                textcontainerskilllink.appendChild(textcontainerskillimg);
                textcontainerskillbox.appendChild(textcontainerskilllink);
            }
            projectElement.appendChild(textcontainerskillbox);
        } 


        projectContainer.appendChild(projectElement);
    }
    projectElementDiv.appendChild(projectContainer);
}
function loadExpToHTML(){
    var expElementDiv=document.getElementById("exp");
    var expBox=document.createElement("div");
    expBox.classList.add("main-container-expbox");

    for (const exp of myexp) {
        var expcard=document.createElement("div");
        expcard.classList.add("main-container-expcard");

        var expcard_img=document.createElement("img");
        expcard_img.classList.add("main-container-expcard-img");
        // for now considering only 1 image
        expcard_img.setAttribute("src",exp["img"][0]["url"]);
        expcard_img.setAttribute("alt",exp["img"][0]["alt"]);
        if(exp["img"][0]["url"]==undefined)
            expcard_img.setAttribute("src","./img/na.jpg");

        expcard.appendChild(expcard_img);
        
        var expcard_title=document.createElement("span");
        expcard_title.classList.add("main-container-expcard-title");
        expcard_title.innerHTML=exp["title"];
        expcard.appendChild(expcard_title);
        
        var expcard_location=document.createElement("span");
        expcard_location.classList.add("main-container-expcard-loc");
        expcard_location.innerHTML="<b>Location : </b>"+exp["location"];
        expcard.appendChild(expcard_location);
        
        var expcard_org=document.createElement("span");
        expcard_org.classList.add("main-container-expcard-org");
        expcard_org.innerHTML="<b>Organization : </b>"+exp["organization"];
        expcard.appendChild(expcard_org);
        
        var expcard_date=document.createElement("span");
        expcard_date.classList.add("main-container-expcard-date");
        expcard_date.innerHTML="<b>Duration : </b>"+exp["date"];
        expcard.appendChild(expcard_date);
        
        var expcard_desc=document.createElement("p");
        expcard_desc.classList.add("main-container-expcard-desc");
        expcard_desc.innerHTML=exp["description"];
        expcard.appendChild(expcard_desc);
        
        
        var expcard_linkbox=document.createElement("div");
        expcard_linkbox.classList.add("main-container-expcard-linkbox");
        for (const link of exp["url"]) {
            if(link["link"]==undefined){continue;}
            var expcard_link=document.createElement("a");
            expcard_link.classList.add("main-container-expcard-link");
            expcard_link.setAttribute("href",link["link"]);
            expcard_link.innerHTML=link["link-text"];
            
            expcard_linkbox.appendChild(expcard_link);
        }
        expcard.appendChild(expcard_linkbox);
        
        var expcard_skillbox=document.createElement("div");
        expcard_skillbox.classList.add("main-container-expcard-skillbox");
        
        var expcard_skillbox_label=document.createElement("span");
        expcard_skillbox_label.classList.add("main-container-expcard-skillbox-label");
        expcard_skillbox_label.innerHTML="<b>Skills : </b>";
        expcard_skillbox.appendChild(expcard_skillbox_label);
        
        // console.log(exp);
        for (const skill of exp["skills"]) {
            // console.log(skill);
            var expcard_skill=document.createElement("a");
            expcard_skill.classList.add("main-container-expcard-skill-link");
            expcard_skill.setAttribute("href","#"+skill["key"]);

            var expcard_skillimg=document.createElement("img");
            expcard_skillimg.classList.add("main-container-expcard-skill-img");
            
            expcard_skillimg.setAttribute("src",skill["img"]["url"]);
            expcard_skillimg.setAttribute("alt",skill["img"]["alt"]);
            
            expcard_skill.appendChild(expcard_skillimg);
            expcard_skillbox.appendChild(expcard_skill);
        }
        expcard.appendChild(expcard_skillbox);
        expBox.appendChild(expcard);
    }
    expElementDiv.appendChild(expBox);
}
function loadAchievementToHTML(){
    var achieveElementDiv=document.getElementById("achieve");
    var childrenlist=[];
    for (const elementachieve of myachievement) {
        var imgelement=elementachieve["img"][0]["url"];
        if (elementachieve["img"][0]["url"]==undefined){
            imgelement="./img/na.jpg";
        }
        var linklist=[];
        for (const link of elementachieve["url"]) {
            if(link["link"]==undefined){continue;}
            linklist.push(elementCreator("a",["main-container-achieve-listitem-link"],[{"href":link["link"]}],link["link-text"]));
        }
        childrenlist.push(elementCreator("div",["main-container-achieve-listitem"],[],"",[
            elementCreator("img",["main-container-achieve-listitem-img"],[{"src":imgelement},{"alt":elementachieve["img"][0]["alt"]}]),
            elementCreator("div",["main-container-achieve-listitem-innerbox"],[],"",[
                elementCreator("span",["main-container-achieve-listitem-title"],[],elementachieve["title"],[]),
                elementCreator("span",["main-container-achieve-listitem-org"],[],"<b>Organization : </b>"+elementachieve["organization"],[]),
                elementCreator("p",["main-container-achieve-listitem-description"],[],elementachieve["description"],[]),
                elementCreator("div",["main-container-achieve-listitem-linkbox"],[],"",linklist),
            ]),
        ]));
    }
    achieveElementDiv.appendChild(elementCreator("div",["main-container-achieve-listbox"],[],"",childrenlist));
}
function loadContactToHTML(){
    var contactlabelboxDiv=document.getElementById("contact").children[0].children[2];
    for (const icontact in mycontact["general-account"]) {
        contactlabelboxDiv.appendChild(
            elementCreator("a",["main-container-contact-box-labelbox"],[{"href":mycontact["general-account"][icontact]["url"]}],"",[
                elementCreator("img",["main-container-contact-box-labelbox-img"],[{"src":mycontact["general-account"][icontact]["logo"]["url"]},{"alt":mycontact["general-account"][icontact]["logo"]["alt"]}]),
                elementCreator("span",["main-container-contact-box-labelbox-text"],[],mycontact["general-account"][icontact]["link-text"]),
            ]));
    }
    for (const icontact in mycontact["social-media"]) {
        contactlabelboxDiv.appendChild(
            elementCreator("a",["main-container-contact-box-labelbox"],[{"href":mycontact["social-media"][icontact]["url"]}],"",[
                elementCreator("img",["main-container-contact-box-labelbox-img"],[{"src":mycontact["social-media"][icontact]["logo"]["url"]},{"alt":mycontact["social-media"][icontact]["logo"]["alt"]}]),
                elementCreator("span",["main-container-contact-box-labelbox-text"],[],mycontact["social-media"][icontact]["link-text"]),
            ]));
    }
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