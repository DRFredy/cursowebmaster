import React from 'react';
import '../styles/Normalize.css'
import '../App.css'
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
  return (
    <div>
      <img className="main-pic centered" src="img/dmblive.png" alt="dmblive" />
        <section className="main-section">
          <h2>Bienvenidos</h2>
          <p>La Banda de Música, musicalmente hablando, es un grupo musical de músicos que hacen música que le gusta a la gente que escucha música en sus ratos libres, o durante las horas de trabajo, o durante un viaje, o mientras hace las compras, o mientras sale a hacer trekking, footing o running, o simplemente disfruta de sentarse en un sillón en la sala de estar, frente a la chimenea con un vaso de whiskey, o cognac, o aperitivo, o jugo de fruta, o agua.</p>
          <p>La banda de Música es una fuente inagotable de repetitivas melodías que redundan en las mismas notas que componen los mismos tonos, que forman las mismas piezas musicales que rebozan de alegría, tristeza, calidez, frío, brillo, oscuridad, como si se tratara de caricias al alma, cachetazos al espíritu, con músicos forjados en lo más oculto de las catacumbas del Tibet.</p>
        </section>
    </div>
  );
}

export default HomePage;