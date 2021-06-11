import React from "react";
import EscribirMensaje from '../../Form/JS/EscribirMensaje'

const ArmarMenu =()=>{
    //construccion de  menu usando una variabe que almacenara todo
    const itemMenu = [
        {
            "id": "1",
            "name": "VivarAir",
        },
        {
            "id": "2",
            "name": "Avianca",
        },
        {
            "id": "3",
            "name": "Latam",
        },
        {
            "id": "4",
            "name": "American Airways",
        },
    ];
    //se returna el menu completo
    return (
        <>
           <li><p className="texto" onClick= {()=>{EscribirMensaje(itemMenu[0].name)}}>{itemMenu[0].name}</p></li>
           <li><p className="texto" onClick= {()=>{EscribirMensaje(itemMenu[1].name)}}>{itemMenu[1].name}</p></li>
           <li><p className="texto" onClick= {()=>{EscribirMensaje(itemMenu[2].name)}}>{itemMenu[2].name}</p></li>
           <li><p className="texto" onClick= {()=>{EscribirMensaje(itemMenu[3].name)}}>{itemMenu[3].name}</p></li>
        </>
    );
}
export default ArmarMenu;