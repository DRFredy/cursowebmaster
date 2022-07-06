import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Normalize.css'
import '../../App.css'
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive ? "active" : undefined }>Inicio</NavLink></li>
          <li><NavLink to="/discography" className={({isActive}) => isActive ? "active" : undefined}>Discografía</NavLink></li>
          <li><NavLink to="/tours" className={({isActive}) => isActive ? "active" : undefined}>Giras</NavLink></li>
          <li><NavLink to="/gallery" className={({isActive}) => isActive ? "active" : undefined}>Galería</NavLink></li>
          <li><NavLink to="/news" className={({isActive}) => isActive ? "active" : undefined}>Novedades</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;