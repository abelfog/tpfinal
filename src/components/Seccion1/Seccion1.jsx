import React from 'react'
import './Seccion1.css'
import estudiante2 from '../../assets/estudiante2.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion1 = () => {
    return(
        <div className="cristianContenedor">
        <div className="iamCristian">
            <p>Hola, soy Cristian</p>
            <h1>Futuro<span className="span1"> programador web</span>. Visitá la página para conocerme mejor.</h1>
            <p>Soy un estudiante de programación. Con mucho entusiasmo por aprender y dar las mejores experiencias en las páginas.</p>
            <div className="botones">
                <a href="#formulario" className="contratarme">Contratarme</a>
                <a href="#portfolio" className="verPortfolio">Ver portfolio</a>
            </div>
        </div>
        <div className="imagen">
            <img src={estudiante2} alt="persona"/>
        </div>
    </div>
    )
}
export { Seccion1 }