import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './navBar/ResponsivAppBar';
import Mosaico from './principal/mosaico';



function App() {
 // const [count, setCount] = useState(0)


  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Mosaico></Mosaico>
    </>
  )
}

export default App
