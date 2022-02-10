// Global Variables
var menuToggle;
// var scrollLocation=window.scrollY;

const myskills={
    // Note on Adding multiple section the javascript scroll wont work for now
    // "CP Lang":{
    "":{
        "Python":{
            "label":"Python",
            "rate":4,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/python.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "C++":{
            "label":"C++",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/c++.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "C":{
            "label":"C",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/c.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Java":{
            "label":"Java",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/java2.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
    // },
    // "Web Dev Tools":{
        "HTML":{
            "label":"HTML",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/html.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "CSS":{
            "label":"CSS",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/css.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "JavaScript":{
            "label":"JavaScript",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/javascript.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
    // },
    // "FrameWorks/Libraries":{
        "Keras":{
            "label":"Keras",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/nodejs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "OpenGL":{
            "label":"OpenGL",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/nodejs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "OpenCV":{
            "label":"OpenCV",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/nodejs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "jquery":{
            "label":"JQuery",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/nodejs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Ajax":{
            "label":"Ajax",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/nodejs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "BootStrap FrameWork":{
            "label":"BootStrap FrameWork",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/expressjs.png",
            },
            "description":"BootStrap is CSS Framework Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat ams explicabo. Cupiditate, praesentium.",
        },
        "Expressjs FrameWork":{
            "label":"Expressjs",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/expressjs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Spring FrameWork":{
            "label":"Spring FrameWork",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/expressjs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Play FrameWork":{
            "label":"Play FrameWork",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/expressjs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Flask FrameWork":{
            "label":"Flask FrameWork",
            "rate":2,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/flask.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Nodejs":{
            "label":"Nodejs",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/nodejs.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
    // },
    // "Database":{
        "MYSQL":{
            "label":"MYSQL",
            "rate":4,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/mysql.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Cassandra":{
            "label":"Cassandra",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/cassandra.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Postgres":{
            "label":"PostGreSql",
            "rate":3,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/cassandra.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
    // },
    // "Softwares/Tools":{
        "ShellScript":{
            "label":"Shell Scripting",
            "rate":5,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/maven.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Maven":{
            "label":"Maven",
            "rate":5,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/maven.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "VS Code":{
            "label":"VS Code",
            "rate":5,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/vscode.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Postman":{
            "label":"Postman",
            "rate":2.5,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/postman.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "AdobeXD":{
            "label":"AdobeXD",
            "rate":4,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/xd.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Figma":{
            "label":"Figma",
            "rate":4,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/figma.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
        "Arduino":{
            "label":"Arduino UNO",
            "rate":2.5,
            "scale":5,
            "img":{
                "alt":"N/A",
                "url":"https://raw.githubusercontent.com/ArindamSharma/ArindamSharma/main/img/skill/postman.png",
            },
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amets explicabo. Cupiditate, praesentium.",
        },
    },
}
const myprojects=[
    {
        "title":"Chakravyuha (Samgatha 2k18)",
        "url":[
            {
                "link-text":"",
                "link":undefined,
            },
        ],
        "description":"Design a robot for the Indian Navy which can perform operation both manually and switch to autonomous when needed. Design another manual robot for Indian Army which can traverse different land conditions. Achieved first position in the Chakravyuha competition (Samgatha 2k18 College Fest) ",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["C"],
            myskills[""]["Arduino"],
        ],
    },
    {
        "title":"Hospital Admin Website",
        "url":[
            {
                "link-text":"Github Repo",
                "link":"https://github.com/ArindamSharma/Hospital_website",
            },
        ],
        "description":"The Management Section such as Medicine, Patient Receipt Generator ,Patient Room Allotment, Appointment Management ,Doctor Entry Record. ..etc",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["Python"],
            myskills[""]["Flask FrameWork"],
            myskills[""]["HTML"],
            myskills[""]["CSS"],
            myskills[""]["JavaScript"],
            myskills[""]["jquery"],
            myskills[""]["Ajax"],
        ],
    },
    {
        "title":"Image Processing using YOLO3 and darknet",
        "url":[
            {
                "link-text":"Github Repo",
                "link":"https://github.com/ArindamSharma/Image-Processing",
            },
        ],
        "description":"Detection of waste such as plastic bottles,plastic bags.from the real time image from beach cleaner Bot . ",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["Python"],
            myskills[""]["OpenCV"],
            myskills[""]["ShellScript"],
        ],
    },
    {
        "title":"OpenGl Based Test Frame",
        "url":[
            {
                "link-text":"Github Repo",
                "link":"https://github.com/ArindamSharma/openGl-project-0",
            },
        ],
        "description":"Its used to test the OpenGL functionalities",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["C"],
            myskills[""]["C++"],
            myskills[""]["OpenGL"],
        ],
    },
    {
        "title":"Simple Neural Network for MNIST data",
        "url":[
            {
                "link-text":"Github Repo (Python)",
                "link":"https://github.com/ArindamSharma/neural-network-0",
            },
            {
                "link-text":"Github Repo (C/C++)",
                "link":"https://github.com/ArindamSharma/neural-network-1",
            },
        ],
        "description":"Maching learning Program used to learn MNIST data, Built from Scratch.",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["C"],
            myskills[""]["C++"],
            myskills[""]["Python"],
        ],
    },
    {
        "title":"File Explorer Interface design UX/UI designing",
        "url":[
            {
                "link-text":"Figma Link",
                "link":"https://www.figma.com/file/yIWU5lGhFELTISPypelHMF/Hakuna-Matata?node-id=658%3A2379",
            },
        ],
        "description":"File Explorer Interface design ,Build as a part of Human Computer Interaction Course. ",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["Figma"],
            myskills[""]["AdobeXD"],
        ],
    },
];
const myexp=[
    {
        "title":"Software Engineer Intern",
        "location":"Hyderabad",
        "organization":"Vassarlabs",
        "url":[
            {
                "link-text":"Website",
                "link":"https://www.vassarlabs.com",
            },
        ],
        "description":"",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["Java"],
            myskills[""]["Cassandra"],
            myskills[""]["MYSQL"],
            myskills[""]["Postgres"],
            myskills[""]["Play Framework"],
            myskills[""]["Nodejs"],
            myskills[""]["Maven"],
            myskills[""]["Spring FrameWork"]
        ],
    },
    {
        "title":"Placement WebSite IIITDM Kancheepuram",
        "location":"Hostel",
        "organization":"IIITDM Kancheepuram",
        "url":[
            {
                "link-text":"Website",
                "link":"https://www.placements.iiitdm.ac.in",
            },
        ],
        "description":"",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["Nodejs"],
            myskills[""]["HTML"],
            myskills[""]["CSS"],
            myskills[""]["JavaScript"],
            myskills[""]["Expressjs FrameWork"],
            myskills[""]["BootStrap FrameWork"],
        ],
    },
    {
        "title":"Full Stack Developer",
        "location":"Bhilai",
        "organization":"BITS Durg",
        "url":[
            {
                "link-text":"College Website",
                "link":"http://www.bitdurg.ac.in/",
            },
        ],
        "description":"",
        "img":[
            {
                "alt":"N/A",
                "url":undefined,
            },
        ],
        "skills":[
            myskills[""]["Python"],
            myskills[""]["HTML"],
            myskills[""]["CSS"],
            myskills[""]["JavaScript"],
            myskills[""]["Flask FrameWork"],
            myskills[""]["jquery"],
            myskills[""]["Ajax"],
        ],
    },
];
const myachievement=[
    {
        "title":"Achieved first place in Chakravyuha (Robotic competition)",
        "organization":"Samgatha 2018 (College Fest)",
        "img":"",
    },
]