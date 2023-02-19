import React from 'react'
import './App.css'
import {Navbar}  from './components/Navbar/Navbar'
import { Seccion1 } from './components/Seccion1/Seccion1'
import { Soloiconos } from './components/Soloiconos/Soloiconos'
import { Seccion2 } from './components/Seccion2/Seccion2'
import { Seccion3 } from './components/Seccion3/Seccion3'
import { Seccion4 } from './components/Seccion4/Seccion4'
import { Seccion5 } from './components/Seccion5/Seccion5'
import { Seccion6 } from './components/Seccion6/Seccion6'
import { Seccion7 } from './components/Seccion7/Seccion7'
import { Seccion8 } from './components/Seccion8/Seccion8'
import { Seccion9 } from './components/Seccion9/Seccion9' 
import { Footer } from './components/Footer/Footer'
import { Terminos } from './components/Terminos/Terminos'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Seccion1/>
      <Soloiconos/>
      <Seccion2/>
      <Seccion3/>
      <Seccion4/>
      <Seccion5/>
      <Seccion6/>
      <Seccion7/>
      <Seccion8/>
      <Seccion9/>
      <Footer/>
      <Terminos/>
    </div>
  )
}

export default App
