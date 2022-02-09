// Global Variables
var menuToggle;

const myskills={
    // Note on Adding multiple section the javascript scroll wont work for now
    // "CP Lang":{
    "":{
        "Python":{
            "rate":4,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/python.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "C++":{
            "rate":3,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/c++.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "C":{
            "rate":3,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/c.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "Java":{
            "rate":2,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/java2.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
    // },
    // "Web Dev Tools":{
        "HTML":{
            "rate":3,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/html.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "CSS":{
            "rate":3,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/css.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "JavaScript":{
            "rate":2,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/javascript.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "Expressjs":{
            "rate":2,
            "scale":5,
            "img":{"alt":"N/A","url":undefined},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "Nodejs":{
            "rate":3,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/nodejs.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
    // },
    // "Database":{
        "MYSQL":{
            "rate":4,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/mysql.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "Cassandra":{
            "rate":3,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/cassandra.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
    // },
    // "Softwares":{
        "AdobeXD":{
            "rate":4,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/xd.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "Figma":{
            "rate":4,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/figma.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "VS Code":{
            "rate":5,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/vscode.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
        "Postman":{
            "rate":2.5,
            "scale":5,
            "img":{"alt":"N/A","url":"https://github.com/ArindamSharma/ArindamSharma/blob/main/img/skill/postman.png?raw=true"},
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur tempora! Fugiat amet facere deserunt officiis tenetur voluptas neque illo aliquid libero molestiae. Officiis totam ipsum maiores explicabo. Cupiditate, praesentium.",
        },
    },
}
const myprojects={};
