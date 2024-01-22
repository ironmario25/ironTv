import React from 'react'
import { useEffect } from 'react'
import LogoCanal from './LogoCanal'
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ListarCanales.css'


const ListarCanales = ({vector}) => {
    const vectorCanales = vector
    let navigate = useNavigate();

    const notify = () => toast('dispositivo movil detectado: recuerde desactivar los datos!!!');

      useEffect(() => {
        if (isMobile) {
            notify()
            console.log("si es mobile");
          } 
      }, []);

    function hizoClick(e){
        console.log(e.target.id)
        const id = parseInt(e.target.id);
    
    const elemento= vectorCanales.find((elem)=>{
     return elem.id===id
    })
        navigate("/reproductor", { state: { userData: elemento } });
    }

    function listar(){
        return vectorCanales.map((canal)=>{
           return (
           <LogoCanal key={canal.id}>
            <img id={canal.id} src={canal.imagen} height="100" width="150" onClick={(e)=>{hizoClick(e)}}></img>
           </LogoCanal>
           )
        })
    }

    return <>
    <div className='fondo'>
    <ToastContainer />
        {listar()}
    </div>
    
    </>
}

export default ListarCanales