import React from 'react'
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