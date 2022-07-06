import React from 'react';
import '../styles/Normalize.css'
import '../App.css'
import '../styles/components/pages/DiscographyPage.css';

const DiscographyPage = (props) => {
  return (
    <section className="main-section">
    <h2>Discografía</h2>

    <div className="album">
      <img className="album-img" src="img/am_cd.png" alt="agüita magica cd cover" />
      <div className="album-data">
        <p className="album-name">Agüita mágica (1999)</p>
        <p>Album viejo, descolorigo, casi que no se ve, pero ahí está.. como el agua.</p>
        <div className="trasklist">
          <ol>
            <li>Santos álbumes, Batman!</li>
            <li>El esquimal desorientado</li>
            <li>No! No de nuevo! decía</li>
            <li>Horas mirando</li>
            <li>Será que ahora</li>
            <li>Agüita mágica</li>
            <li>Pertinax y percloruro férrico</li>
            <li>Un elefante se balanceaba</li>
            <li>Tereré para tres</li>
            <li>Tema 3</li>
          </ol>
        </div>
      </div>
    </div>

    <div className="album">
      <img className="album-img" src="img/hp_cd.png" alt="hot panckakes cd cover" />
      <div className="album-data">
        <p className="album-name">Hot panckakes (2002)</p>
        <p>Un álbum dulce, dulcísimo, como la miel de maple.</p>
        <div className="trasklist">
          <ol>
            <li>La millonésima parte</li>
            <li>Será o no será?</li>
            <li>Al final, no estaba loco</li>
            <li>Me temo que si</li>
            <li>Nadando en Esquel</li>
            <li>Soltá eso!</li>
            <li>Dejen algo en el plato</li>
            <li>Se me cayó el fernet</li>
            <li>Jugo de lima</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  );
}

export default DiscographyPage;