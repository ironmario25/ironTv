import { useState } from 'react'

import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './navBar/ResponsivAppBar';
import Mosaico from './principal/Mosaico'


function App() {

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Mosaico></Mosaico>
    </>
  )
}

export default App
