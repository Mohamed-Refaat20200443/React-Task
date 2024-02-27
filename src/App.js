import React, { PureComponent } from 'react'
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About'

import Notfound from './components/Notfound/Notfound'
import Contact from './components/Contact/Contact'
import Layer from './components/layer/Layer'
import Protofolio from './components/Protofolio/Protofolio'


const myrouter = createBrowserRouter(
  [

    
      {path:"" , element:<Layer/> , children:  [


        
          {index:true , element: <Home/> } ,
         
          {path:'About' , element: < About/> },
          {path:'Contact' , element: < Contact/> },
          {  path:'Protofolio' , element: < Protofolio/> },
         
          {path:'*' , element: <Notfound/> } ,

       











      ]}
    





  ]
)




class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
        <RouterProvider router={myrouter} />
    )
  }
}

export default App
