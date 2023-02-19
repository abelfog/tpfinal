import React, {useState} from 'react'
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header>
            <div id="logo" className="logo"> 
                <i className="bi bi-journal-code logito"></i>
                <p>My portfolio</p>
            </div>
            <nav className={`nav_items ${isOpen && "open"}`}>
                <a href="#logo" className="navegador">Home</a>
                <a href="#sobreMi" className="navegador">Acerca de mi</a>
                <a href="#conocimientos" className="navegador">Conocimientos</a>
                <a href="#portfolio" className="navegador">Portfolio</a>
            </nav>
            <a class="boton" href="#formulario">Contactarme </a>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}
export { Navbar }
/* https://www.behance.net/gallery/160311393/Portfolio-Website-Design */