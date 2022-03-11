import { 
    Button,
 } from '@mui/material'

import {
    LinkedIn,
    GitHub,
    Email,
 } from '@mui/icons-material';

const Footer = () => {

    return (
        <div className="footer">
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
                
        </div>
    )
}

export default Footer