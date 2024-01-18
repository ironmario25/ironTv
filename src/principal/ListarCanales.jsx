import React from 'react'
import LogoCanal from './LogoCanal'
import { useNavigate } from 'react-router-dom';

const ListarCanales = ({vector}) => {
    const vectorCanales = vector
    let navigate = useNavigate();

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
        {listar()}
    </>
}

export default ListarCanales