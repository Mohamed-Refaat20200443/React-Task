import React from 'react'
import "./Homecss/home.css"
import img from "./img/avataaars.svg"

function Home() {
    return <>

    <div className="home d-flex justify-content-center align-items-center text-center">


    <div className="container"> 

<div className="img w-25  m-auto pb-2">
   <img src={img} alt="man"  className=''/>
</div>

<div className="main-text p-4 text-white">

    <h2>START FRAMEWORK</h2>

</div>

<div className="divider mt-3 p-2">
<div class="star"><i class="fa-solid fa-star fa-lg text-white"></i></div>
</div>

<div className="text p-2 text-white">
    <h4>
    Graphic Artist - Web Designer - Illustrator
    </h4>
</div>







</div>


    </div>


  

  
    </>
}

export default Home
