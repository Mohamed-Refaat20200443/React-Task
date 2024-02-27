import React from 'react'
import "./contactCss/contact.css"

function Contact() {
    return <>

    <div className="contact d-flex justify-content-center align-items-center text-center  ">




    <div className="container py-5    ">

    <div className="main-text p-4 ">
            <h2>CONATCT SECTION</h2>


            
        </div>

        <div className="divider mt-3 p-2">
                             <div className="star"><i class="fa-solid fa-star fa-lg text-white"></i></div>
                        </div>

    



  <form className='w-75 m-auto'>
    <div className="form-group mb-3 p-3 ">
      <input type="text" className="form-control border-0 border-bottom border-secondary bg-transparent" id="userName" placeholder="user Name" />
    </div>
    <div className="form-group mb-3 p-3">
      <input type="text" className="form-control border-0 border-bottom border-secondary bg-transparent" id="userAge" placeholder="user Age" />
    </div>
    <div className="form-group mb-3 p-3">
      <input type="email" className="form-control border-0 border-bottom border-secondary bg-transparent " id="userEmail" placeholder="user Email" />
    </div>
    <div className="form-group mb-3 p-3">
      <input type="password" className="form-control border-0 border-bottom border-secondary bg-transparent" id="userPassword" placeholder="user Password" />
    </div>
    <button type="submit" className="btn btn-success mb-3  ms-3">Send Message</button>
  </form>
</div>


    </div>




    </>
}

export default Contact
