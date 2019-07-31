import React from 'react'
import './App.css'
// import Navbar from './Components/Navbar'

class App extends React.Component{

  render(){
      
    return <div>
            {
              this.props.children
            }
            {
              // <Navbar></Navbar>
            }
          </div> 
  }
}

export default App
