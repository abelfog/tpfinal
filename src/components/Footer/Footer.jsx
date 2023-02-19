import React from 'react'
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Footer = () => {
    return(
        <div className="footerContenedor">
            <div className="logoFooter">
                <i className="bi bi-journal-code"></i>
                <p>My portfolio</p>
            </div>
            <div className='nav'>
                <a href="#logo" className="navegador2">Home</a>
                <a href="#sobreMi" className="navegador2">Acerca de mi</a>
                <a href="#conocimientos" className="navegador2">Conocimientos</a>
                <a href="#portfolio" className="navegador2">Portfolio</a>
            </div>
            <div className="iconosFooter">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
            </div>
        </div>
    )
}
export { Footer }