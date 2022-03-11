import talkeu from './images/talkeu-chat.png'
import movieverse from './images/movieverse_cover.jpg'
import yastyle from './images/yastyle_cover.png'
import lineup from './images/todo-List-cover.jpg'
import notekeeper from './images/NoteKeeper-cover.png'
import simplekitchen from './images/simple-kitchen-cover.png'
import footwithyayaa from './images/foodwithyayaa-photo.png'
import twitter from './images/mini-twitter-cover.png'


const data = [ 
    {
        id: 1,
        img: `${talkeu}`,
        name:"Talkeu",
        alt:"Talkeu Chat App",
        technologies:"Node.js, Express.js, Socket.io",
        description:"A web application that allows multiple people to chat in the same chat room",
        width: "400px",
        height: "250px",
        live:"https://talkeu.herokuapp.com/",
        github:"https://github.com/soryaek/Talkeu"
    },
    {
        id: 2,
        img: `${movieverse}`,
        name:"Movieverse",
        alt:"Movieverse",
        technologies:"React.js, Node.js. MongoDB, Express.js, API, EmailJS ",
        description:"A movie app that can add movies into watchlist or watchedlist and share with anyone via email",
        width: "400px",
        height: "250px",
        live:"https://www.youtube.com/embed/cqx825XEcjQ",
        github:"https://github.com/soryaek/movieverse"

    },
    {
        id: 3,
        img: `${yastyle}`,
        name:"YaStyle",
        alt:"YaStyle",
        technologies:"HTML, CSS, Javascript, EmailJS, Localstorage",
        description:"A shopping site",
        width: "400px",
        height: "250px",
        live:"https://yastyle.netlify.app/",
        github:"https://github.com/soryaek/YaStyle"
    },
    {
        id: 4,
        img: `${lineup}`,
        name:"LineUP",
        alt:"LineUP",
        technologies:"Express.js, HTML, CSS, Javascript",
        description:"Daily todo-list",
        width: "400px",
        height: "250px",
        live:"https://llineup.herokuapp.com/",
        github:"https://github.com/soryaek/LineUp"
    },
    
    {
        id: 5,
        img: `${simplekitchen}`,
        name:"Simple Kitchen",
        alt:"Simple Kitchen",
        technologies:"Node.js, MongoDB, Express.js, SASS, PUG, Javascript",
        description:"Mini food site",
        width: "400px",
        height: "250px",
        live:"https://simple-kitchen21.herokuapp.com/",
        github:"https://github.com/soryaek/Simple-Kitchen"
    },
    {
        id: 6,
        img: `${notekeeper}`,
        name:"NoteKeeper App",
        alt:"NoteKeeper App",
        technologies:"React.js, CSS",
        description:"A web application where users can add or remove notes.",
        width: "400px",
        height: "250px",
        live:"https://o6b5k.csb.app/",
        github:"https://github.com/soryaek/Note_Keeper_ReactJS"
    },
    {
        id: 7,
        img: `${twitter}`,
        name:"Mini Twitter",
        alt:"Mini Twitter",
        technologies:"Java",
        description:"A web application that allows users to send and receive short posts",
        width: "400px",
        height: "250px",
        live:"https://soryaek.github.io/projects/Mini-Twitter/index.html",
        github:"https://github.com/soryaek/Mini-Twitter"
    },
    {
        id: 8,
        img: `${yastyle}`,
        name:"YaStyle v.2 (In-Progress)",
        alt:"YaStyle v.2 (In-Progress)",
        technologies:"Node.js, Javascript, MongoDB, Express, EJS, SCSS",
        description:"A shopping site version 2",
        width: "400px",
        height: "250px",
        live:"https://yastyle.netlify.app/",
        github:"https://github.com/soryaek/YaStyle_v2"
    },
    {
        id: 9,
        img: `${footwithyayaa}`,
        name:"Foodwithyayaa",
        alt:"Foodwithyayaa",
        technologies:"Javascript, HTML, CSS",
        description:"Built a client's foodblog page",
        width: "400px",
        height: "250px",
        live:"https://foodwithyayaa.netlify.app/",
        github:"https://foodwithyayaa.netlify.app/"
    }
]

export default data;