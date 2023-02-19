import React from 'react'
import './Seccion8.css'
import mapa from '../../assets/mapa.png'

const Seccion8 = () => {
    return(
    <div className="prueba">
        <div className="mapaContenedor">
            <div className="letras">
                <h1>Dispuesto a trabajar en cualquier parte del mundo</h1>
                <div className="mapaYdemas">
                    <img src= {mapa} alt="mapa mundial"/>
                    <div className="trabajarJuntos">
                        <h2>Trabajemos Juntos</h2>
                        <p>El trabajo en equipo es la mejor opción para direccionar un proyecto ambicioso. Trabajemos juntos para llegar a un propósito común, le mejora constante. Que es lo que nos diferenciará del resto.</p>
                        <a href="#formulario" className="btn3"><p>Contactarme</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export { Seccion8 }