import React from "react"
import reactlogo from "../images/reactlogo.png"
import css from "../images/css.png"
import html from "../images/html.png"
import javascript from "../images/javascript.png"
import bootstrap from "../images/bootstrap.png"
import git from "../images/git.png"
import github from "../images/github.png"
import nodejs from "../images/nodejs-icon.png"
import mongodb from "../images/mongodb-icon.png"

const ListOfSkills = () => {
    return (
        <div className="col mb-5">
            <h5 className="mb-4 font-weight-bold text-uppercase">Skills</h5>
            <div className="row justify-content-between mx-auto">
                <div>
                    <img className="text-right mx-2 mb-2" src={html} alt="html 5" height="50"/>
                    <p className="small">HTML 5</p>
                </div>
                <div>
                    <img className="text-right mx-2 mb-2" src={css} alt="css 3" height="50"/>
                    <p className="small">CSS 3</p>
                </div>
                <div>
                    <img className="text-right mx-2 mb-2" src={javascript} alt="javascript" height="50"/>
                    <p className="small">Javascript</p>
                </div>
                <div>
                    <img className="text-right mx-2 mb-2" src={reactlogo} alt="react js" height="50"/>
                    <p className="small">React JS</p>
                </div>
     
                <div>
                    <img className="text-right mx-2 mb-2" src={bootstrap} alt="bootstrap" height="50"/>
                    <p className="small">Bootstrap</p>
                </div>
                <div>
                    <img className="text-right mx-2 mb-2" src={nodejs} alt="nodejs" height="50"/>
                    <p className="small">NodeJS</p>
                </div>
                <div>
                    <img className="text-right mx-2 mb-2" src={mongodb} alt="MongoDB" height="50"/>
                    <p className="small">MongoDB</p>
                </div>

                <div>
                    <img className="text-right mx-2 mb-2" src={github} alt="github" height="50"/>
                    <p className="small">GitHub</p>
                </div>
                <div>
                    <img className="text-right mx-2 mb-2" src={git} alt="git" height="50"/>
                    <p className="small">Git</p>
                </div>
            </div>
        </div>
    )
}

export default ListOfSkills ;