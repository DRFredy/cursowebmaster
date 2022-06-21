import React from 'react';

const ContactPage = (props) => {
  return (
    <section className="main-section">
      <h2>Contacto</h2>
      <article>
        <div className="columns">
          <form className="contact" action="">
            <p>
              <label for="nombre" className="label-column">Nombre</label>
              <input type="text" id="nombre" value="" placeholder="nombre" class="input-column" />
            </p>
            <p>
              <label for="apellido" className="label-column">Apellido</label>
              <input type="text" id="apellido" value="" placeholder="apellido" class="input-column" />
            </p>
            <p>
              <label for="email" className="label-column">Email</label>
              <input type="text" id="email" value="" placeholder="email" class="input-column" />
            </p>
            <p>
              <label for="comentarios" className="label-column">Comentarios</label>
              <textarea id="comentarios" value="" class="textarea-column"></textarea>
            </p>
            <button type="submit" onclick="">Enviar</button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default ContactPage;