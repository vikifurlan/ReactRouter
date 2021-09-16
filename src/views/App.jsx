import React from "react"
import "./App.css"
import Menu from "../Components/layout/Menu"
import Content from "../Components/layout/Content"
import {BrowserRouter as Router} from "react-router-dom"


const App = props => (
  <div className="App">
    <Router>
    <Menu />
    <Content />
    </Router>
    

    
  </div>

)

export default App