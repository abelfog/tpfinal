import React from 'react'
import './Seccion7.css'
import formulario from '../../assets/formulario.jpg'
import billetera from '../../assets/billetera.jpg'
import onePage from '../../assets/onePage.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion7 = () => {
    return(
        
        <>
        <div id="portfolio" className="myPortfolio">
        <div className="portfolioTitulo">
            <p>Proyectos recientes</p>
            <h1>MiPortfolio</h1>
        </div>
            <button href="#" className="btn2"><i className="bi bi-github"></i>Visita mi Github</button>
    </div>
    <div className="tarjetasProyectos">
        <div className="tarjetaProyect">
            <img src= {formulario} alt="formulario"/>
            <h2>Formulario</h2>
            <p>Unos de los primeros proyectos realizados. Utilizando las herramientas establecidas por la universidad.</p>
            <button href="#" className="verGitHub">Verlo en Github<i className="bi bi-arrow-up-right"></i></button>
        </div>
        <div className="tarjetaProyect">
            <img src= {billetera} alt="billetera"/>
            <h2>Wallet</h2>
            <p>Proyecto en el cual se utiliza, por primera vez, el lenguaje Javascript, como principal dialecto utilizado en la página.</p>
            <button href="#" className="verGitHub">Verlo en Github<i className="bi bi-arrow-up-right"></i></button>
        </div>
        <div className="tarjetaProyect">
            <img src= {onePage} alt="pagina web"/>
            <h2>One Page</h2>
            <p>Un trabajo ambicioso en el cual se utiliza el conocimiento enseñado. Uniendo todo y volcarlo en este proyecto.</p>
            <button href="#" className="verGitHub">Verlo en Github<i className="bi bi-arrow-up-right"></i></button>
        </div>
    </div>
    </>
    )
}
export { Seccion7 }