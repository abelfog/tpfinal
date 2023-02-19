import React from 'react'
import './Seccion5.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Seccion5 = () => {
    return(
        <div id="conocimientos" className="expeHabContenedor">
            <div className="expe">
                <div className="prueba2">
                <p>CONOCIMIENTOS</p>
                    <div className="listaHab">
                        <div className="listita">
                            <div class="sublista">
                                <i className="bi bi-cursor-fill"></i>
                                <h1>HTML</h1>
                            </div>
                                <p>Universidad Tecnologica Nacional</p>
                                <p className="p1">2022 - Hasta la fecha</p>
                        </div>
                        <div className="listita">
                            <div className="sublista">
                                <i className="bi bi-cursor-fill"></i>
                                <h1>CSS</h1>
                            </div>
                                <p>Universidad Tecnologica Nacional</p>
                                <p className="p1">2022 - Hasta la fecha</p>
                        </div>
                        <div className="listita">
                            <div class="sublista">
                                <i className="bi bi-cursor-fill"></i>
                                <h1>Javascript</h1>
                            </div>
                                <p>Universidad Tecnologica Nacional</p>
                                <p className="p1">2022 - Hasta la fecha</p>
                        </div>
                        <div className="listita">
                            <div className="sublista">
                                <i className="bi bi-cursor-fill"></i>
                                <h1>React</h1>
                            </div>  
                                <p>Universidad Tecnologica Nacional</p>
                                <p className="p1">2022 - Hasta la fecha</p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="skill-bars">
            <p>HABILIDADES</p>
                <div className="bar">
                    <div className="info">
                        <span>HTML</span>
                    </div>
                        <div className="progress-line html">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>CSS</span>
                    </div>
                        <div className="progress-line css">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Javascript</span>
                    </div>
                    <div className="progress-line javascript">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>React</span>
                    </div>
                    <div className="progress-line reactJs">
                        <span></span>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export { Seccion5 }

