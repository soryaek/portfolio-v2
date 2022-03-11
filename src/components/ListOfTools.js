import React from "react"

const ListOfTools = () => {
    return (
        <div className="col mb-5">
            <h5 className="mb-4 font-weight-bold text-uppercase">Tools</h5>
            <div className="row justify-content-center mx-auto">
                <div>
                    <p className="small mr-3 tool-box">VS Code</p>
                </div>
                <div>
                    <p className="small mr-3 tool-box">Atom</p>
                </div>
                <div>
                    <p className="small mr-3 tool-box">Robo 3T</p>
                </div>
                <div>
                    <p className="small mr-3 tool-box">MongoDB Compass</p>
                </div>
                <div>
                    <p className="small mr-3 tool-box">Postman</p>
                </div>
     
                <div>
                    <p className="small mr-3 tool-box">Netlify</p>
                </div>
                <div>
                    <p className="small mr-3 tool-box">Bracket</p>
                </div>
                <div>
                    <p className="small mr-3 tool-box">MySQL Workbench</p>
                </div>
            
            </div>
        </div>
    )
}

export default ListOfTools;