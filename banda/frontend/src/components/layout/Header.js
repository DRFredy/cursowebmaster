import React from 'react';
import '../../styles/Normalize.css'
import '../../App.css'
import '../../styles/components/layout/Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src="../../../img/logo.png" width="150" alt="logo lbm" />
        <h1>La Banda De Música</h1>
      </div>
    </header>
  );
}

export default Header;