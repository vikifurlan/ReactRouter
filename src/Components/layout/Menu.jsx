import React from "react"
import "./Menu.css"
import { Link } from "react-router-dom"



const Menu = props => (
  <aside className="menu">
    <nav>
      <ul>
        <li>
        <Link to="/">Início</Link>
          </li>

        <li>
        
          <a href="about">Sobre</a>
        </li>
      </ul>
    </nav>
  </aside>

)

export default Menu