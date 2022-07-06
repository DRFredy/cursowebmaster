// import React, { Component } from 'react';
import React from 'react';
// import SubmitButton from '../components/Button';
import '../styles/Normalize.css'
import '../App.css'
import '../styles/components/pages/ContactPage.css';

const ContactPage = (props) => {

  // function showAlert(msg) {
  //   alert(msg);
  // };

  return (
    <section className="main-section">
      <h2>Contacto</h2>
      <article>
        <div className="columns">
          <form className="contact" action="">
            <p>
              <label for="nombre" className="label-column">Nombre</label>
              <input type="text" id="nombre" value="" placeholder="nombre" className="input-column" />
            </p>
            <p>
              <label for="apellido" className="label-column">Apellido</label>
              <input type="text" id="apellido" value="" placeholder="apellido" className="input-column" />
            </p>
            <p>
              <label for="email" className="label-column">Email</label>
              <input type="text" id="email" value="" placeholder="email" className="input-column" />
            </p>
            <p>
              <label for="comentarios" className="label-column">Comentarios</label>
              <textarea id="comentarios" value="" className="textarea-column"></textarea>
            </p>
            <button type="submit">Enviar</button>
            {/* <SubmitButton click={showAlert} msg="mssssg" text="Enviarrr" /> */}
          </form>
        </div>
      </article>
    </section>
  );
}

export default ContactPage;