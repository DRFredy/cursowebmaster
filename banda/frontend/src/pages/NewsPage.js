import React from 'react';

const NewsPage = (props) => {
  return (
    <section className="main-section">
      <h2>Novedades</h2>
      <article className="news-article">
        <div className="article-title">Nos quedamos sin cantante</div>
        <p>El cholo se sacó el quini y dejó la banda. Buscamos vocalista ad honorem.</p>
      </article>
      <article className="news-article">
        <div className="article-title">Nos contrataron para realizar una gira</div>
        <p>por Colombia, Ecuador, Perú, Bolivia, Brasil, Uruguay y La República del Congo, pero como el Cholo se fue de la banda, nos quedamos piolas.</p>
      </article>
      <article className="news-article">
        <div className="article-title">Ajustándonos a la situación</div>
        <p>Decidimos que vamos a agarrar la concesión de un hotel y además de atenderlo, tocaremos nuestros temas (en forma instrumental, es decir, sin vocalista) en la hora de la cena.</p>
      </article>
    </section>
  );
}

export default NewsPage;