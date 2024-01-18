import React from 'react'
import LogoCanal from './LogoCanal'
import canales from '../canales/canales'
import ListarCanales from './ListarCanales'

const Mosaico = () => {
    
  return <>
  <div>
    <ListarCanales vector={canales()}></ListarCanales>
    
  </div>
  </>
}

export default Mosaico