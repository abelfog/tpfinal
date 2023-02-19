import React from 'react'
import './Seccion6.css'
import perfil2 from '../../assets/perfil2.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion6 = () => {
    return(
        <div className="contenedorDisenio">
            <div className="imgFondoAzul">
                <div className="disenioAzul">
                    <i className="bi bi-pc-display-horizontal"></i>
                    <h4>Programador Web</h4>
                    <p>Permanente en evolución.</p>
                </div>
                <div className="disenioAzul">
                    <i className="bi bi-palette"></i>
                    <h4>Mejores diseños</h4>
                    <p>Enfocado en el progreso.</p>
                </div>
            </div>
            <div className="contenedorQuePuedo">
                <h4>Qué puedo aportar en su empresa</h4>
                <p>La constante busqueda de mejorar cada diseño que se me asigne.</p>
                <div className="imagenYtexto">
                    <img src={perfil2} alt="persona joven"/>
                    <p><span>Cristian Fogel</span><br/>Estudiante Programación Web</p>                    
                </div>
                <div className="numPorcentaje">
                    <div className="porcen1">
                        <span>+72%</span>
                        <p>Capacidad trabajo</p>
                    </div>
                    <div className="porcen2">
                        <span>+70%</span>
                        <p>Velocidad de progreso</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Seccion6 }