import React from 'react'
import { useLocation } from 'react-router-dom';
import './Reproductor.css'
const Reproductor = () => {
  const { state } = useLocation();
  console.log(state.userData);
  return (
    <iframe
    allow="encrypted-media"
    className='pantallaCompleta'
    src={state.userData.link}
    width="100%"
    height="100%"
    title={state.userData.nombre}
    id={state.userData.id}
    name="iframe"
    frameBorder="0"
    scrolling="no"
    allowFullScreen=""
    onload="$('.iframe-loading').css('background-image', 'none');" sandbox="allow-same-origin allow-scripts"
>
</iframe>
  )
}

export default Reproductor