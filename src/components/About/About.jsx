import React, { PureComponent } from 'react'

import "./Aboutcss/about.css"

class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return  <>


                     <div className='about d-flex justify-content-center align-items-center text-center'>
                        <div className="container">
                        <div className="main-text p-4 text-white">

                            <h2>START FRAMEWORK</h2>

                        </div>

                        <div className="divider mt-3 p-2">
                             <div className="star"><i className="fa-solid fa-star fa-lg text-white"></i></div>
                        </div>

                     <div className="row pt-3">
                        
                     <div className="col-md-6 text-white">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                        </div>

                        <div className="col-md-6 text-white">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            
                        </div>
                     </div>





                        </div>
                     </div>

        
        
        
        </>
    }
}

export default About