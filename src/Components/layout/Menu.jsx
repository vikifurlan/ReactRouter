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
        <Link to="/param/123">Trabalhe conosco</Link>
          </li>
        

        <li>
        <Link to="/about">Sobre</Link>  
        </li>
        <li>
        <Link to="/segurança">Segurança</Link>
          </li>
      </ul>
    </nav>
  </aside>

)

export default Menu