import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Layer() {
    return <>

    <Navbar/>
    <Outlet></Outlet>

    <Footer/>



    </>
}

export default Layer
