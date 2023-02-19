import React from 'react'
import './Seccion2.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion2 = () => {
    return(
        <div id="sobreMi" className="aboutMeContenedor">     
        <div className="sobreLorem">
            <h2 className="hLorem">Sobre mí.</h2>
            <p>Verán a una persona con la capacidad para realizar proyectos innovadores, donde el usuario quedará satisfecho por el resultado de lo realizado.</p>
        </div> 
        <div className="iconosYletras">
            <div className="subIconosletras">
                <i className="bi bi-people"></i>
                <p>Trabajo en equipo</p>
            </div>  
            <div className="subIconosletras">        
                <i className="bi bi-person-workspace"></i>
                <p>Resolución de problemas</p>
            </div>  
            <div className="subIconosletras">        
                <i className="bi bi-clock"></i>
                <p>Disponible full-time</p>
            </div> 
        </div>
    </div>
    )
}
export { Seccion2 }


