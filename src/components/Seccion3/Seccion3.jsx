import React from 'react'
import './Seccion3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion3 = () => {
    return(
        <div className="experienciaContenedor">
            <div className="tarjeta">
                <i className="bi bi-filetype-html"></i>               
                <p>HTML es fácil y pronto lo podré dominar a la perfección. Conseguiré los resultados profesionales gracias a mis capacidades.</p>
            </div>
            <div className="tarjeta2">
                <i className="bi bi-filetype-css"></i>               
                <p>El CSS junto con HTML me dará una de las herramientas necesarias para demostrar la facultad para crear diferentes proyectos.</p>
            </div>
            <div className="tarjeta3">
                <i className="bi bi-filetype-js"></i>                
                <p>Con Javascript aplicaré el entendimiento que defina la dinámica de una página web, sobre las bases de HTML y CSS.</p>
            </div>
            <div className="tarjeta4">
                <i className="bi bi-filetype-jsx"></i>                
                <p>Englobando todo código, usaré React para facilitarme el trabajo sobre los componentes que me hará todo mas organizado.</p>
            </div>
        </div>
    )
}
export { Seccion3 }

