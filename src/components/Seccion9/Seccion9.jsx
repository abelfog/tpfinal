import React from 'react'
import './Seccion9.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion9 = () => {
    const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70melup', 'template_e9nol67', form.current, 'xdh5PTLvgG2yFmd7d')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
    return(
        <div className="logoYformularioContenedor">
            <div className="logoYdatos">
                <i className="bi bi-journal-code iconoCarpeta"></i>
                <h1>Cristian Fogel</h1>
                <h2>Programador Web</h2>
                <div className="soloLogos">
                    <i className="bi bi-linkedin link"></i>
                    <i className="bi bi-facebook face"></i>
                    <i className="bi bi-twitter twit"></i>
                    <i className="bi bi-instagram inst"></i>
                </div>
                <p>Número personal</p>
                <p>+54-01123078783</p>
                <p><br/></p>
                <p>Di Hola, en skype</p>
                <p>Live:FogelCristian</p>
            </div>
            <div id="formulario" className="formularioYcontacto">
                    <h1 className="contactame">Contactame.</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Cuál es tu Nombre?</label>
                        <input type="text" name="user_name" />
                        <label>Cuál es tu Email?</label>
                        <input type="email" name="user_email" />
                        <label>Mensaje</label>
                        <textarea type="text" name="message" cols="30" rows="10"/>
                        <button type="submit" className="botonSubmit"><i className="bi bi-send send"></i><p>Enviar</p></button>
                    </form>
            </div>
        </div>
    )
}
export { Seccion9 }