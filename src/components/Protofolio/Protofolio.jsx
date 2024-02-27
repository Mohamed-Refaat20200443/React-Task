import React from 'react'
import "./Protocss/proto.css"
import img1 from "./image/poert1.png"
import img2 from "./image/port2.png"
import img3 from "./image/port3.png"



function Protofolio() {
    return <>



    <div className="protofolio p-5  mt-3">
        <div className="container p-4 ">

            
            <div className="row g-3">
                <div className="col-md-12">
                 <h2 className='proto text-center'> PORTFOLIO COMPONENT </h2>


                </div>
                <div className="col-md-4 ">

                    <div className="img w-100 position-relative">

                        <img src={img1} alt="img" className='w-100' />

                        <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center ">
                              <i class="fa-solid fa-plus fa-6x  "></i>
                        </div>



                    </div>

                </div>

                <div className="col-md-4 ">

<div className="img w-100 position-relative">

    <img src={img2} alt="img" className='w-100' />

    <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center ">
          <i class="fa-solid fa-plus fa-6x  "></i>
    </div>



</div>

</div>

<div className="col-md-4 ">

<div className="img w-100 position-relative">

    <img src={img3} alt="img" className='w-100' />

    <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center ">
          <i class="fa-solid fa-plus fa-6x  "></i>
    </div>



</div>

</div>

<div className="col-md-4 ">

<div className="img w-100 position-relative">

    <img src={img1} alt="img" className='w-100' />

    <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center ">
          <i class="fa-solid fa-plus fa-6x  "></i>
    </div>



</div>

</div>


<div className="col-md-4 ">

<div className="img w-100 position-relative">

    <img src={img2} alt="img" className='w-100' />

    <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center ">
          <i class="fa-solid fa-plus fa-6x  "></i>
    </div>



</div>

</div>

<div className="col-md-4 ">

<div className="img w-100 position-relative">

    <img src={img3} alt="img" className='w-100' />

    <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center ">
          <i class="fa-solid fa-plus fa-6x  "></i>
    </div>



</div>

</div>

            
            </div>
        </div>
    </div>
    
    
    
    
    </>
}

export default Protofolio
