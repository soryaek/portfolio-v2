import React from "react"
import ListOfSkills  from "./ListOfSkills"
import ListOfTools from "./ListOfTools"
import me from "../images/profile_photo.jpeg"
import DisplayProjects from "./DisplayProjects"
import Data from '../data'
// import Footer from './Footer'


import { 
    Button,
 } from '@mui/material'

import {
    LinkedIn,
    GitHub,
    Email,
 } from '@mui/icons-material';


const MainComponent = () => {
    return (
        <div className="text-center">
            <div className="container pt-5 ">
                <div className="row">
                    <div className="img-col col-10 col-lg-3 mx-auto">
                        <img 
                            src={me} 
                            alt="Me" 
                            id="img" 
                            height="250" width="250" className="rounded-circle" 
                        />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9 w-100 mb-4 border-bottom ">
                        <h1 id="name-heading">Sorya Ek </h1>
                        <h5>Junior Frontend Software Engineer</h5>
                        <div className="row mt-3">
                            <div className="col col-md-8 mx-auto">
                                <Button 
                                    variant="contained" 
                                    className="btn m-1" 
                                    onClick={() => window.open("https://www.linkedin.com/in/sorya-ek/")}
                                >
                                    <LinkedIn />
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className="btn m-1" 
                                    onClick={() => window.open("https://github.com/soryaek")}
                                >
                                    <GitHub />
                                </Button>
                                <Button 
                                    variant="contained"
                                    className="btn m-1" 
                                    onClick={() => window.open('mailto:sorya.ekk@gmail.com')}
                                >
                                    <Email />
                                </Button>
                                <div className="border-bottom my-2 w-75 mx-auto" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>Hello! I'm Sorya. I am a Cal Poly Pomona Alumni with a bachelor's degree in Computer Science and have completed a
                                 Fullstack Web Development Bootcamp at Westcliff University. I enjoy programming and love creating websites and blogs during my spare time. 
                                 I have experience with different programming languages and frameworks such as Java, 
                                 Python, ReactJS, VueJS, NodeJS, MongoDB, ExpressJS, SASS, PUG, Restful API, Javascript, HTML/CSS, Socket.io. 
                                 Besides coding, I also enjoy hiking, cooking, and capturing beautiful pictures.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <ListOfSkills />
                </div>

                <div className="row">
                    <ListOfTools />
                </div>
            </div>
            <div>  
                <h5 className="mb-4 font-weight-bold text-uppercase">Projects</h5>
                <div className="project-items">
                    {Data.map((project) => (
                        <DisplayProjects 
                            id={project.id}
                            img={project.img}
                            alt={project.alt}
                            technologies={project.technologies}
                            name={project.name}
                            description = {project.description}
                            width={project.width}
                            height={project.height}
                            live={project.live}
                            github={project.github}
                        />
                    ))}
                </div>
            </div>
            <br /> <br /><br /> <br />        
            {/* <Footer /> */}

        </div>
    )
}

export default MainComponent