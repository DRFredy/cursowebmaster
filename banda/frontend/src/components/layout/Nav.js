import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/discography">Discografía</Link></li>
          <li><Link to="/tours">Giras</Link></li>
          <li><Link to="/gallery">Galería</Link></li>
          <li><Link to="/news">Novedades</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;