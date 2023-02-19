import React from 'react'
import './Seccion4.css'
import fotoPerfil from '../../assets/fotoPerfil.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion4 = () => {
    return(
    <div className="contenedorFotoPefil">
        <div className="fotoPerfil">
            <img src={fotoPerfil} alt="persona"/>
        </div>
        <div className="iconosPerfil">
            <div className="perfil">
                <i className="bi bi-search"></i>
                <p>Buscá mis trabajos</p>
            </div>
            <div className="perfil">
                <i className="bi bi-emoji-sunglasses"></i>
                <p>Chequeá mis habilidades</p>
            </div>
            <div className="perfil">
                <i className="bi bi-phone"></i>
                <p>Y contactame</p>
            </div>
        </div>
    </div>
    )
}
export { Seccion4 }
