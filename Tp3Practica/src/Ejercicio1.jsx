import { useState } from "react";

export default function Ejercicio1(){
    const [bIzq,setBI] = useState(false)
    const [bCent,setBC] = useState(true)
    const [bDer,setDer] = useState(true)

    const cambiarIzq =()=>{
        setBI(!bIzq)
        setBC(!bCent)
    }

    const cambiarCent = () =>{
        setBC(!bCent)
        setDer(!bDer)
    }

    const cambiarDer = () =>{
        setDer(!bDer)
        setBI(!bIzq)
    }

    return(
        <>
            <button disabled={bIzq} onClick={cambiarIzq}>Izquierda</button>
            <button disabled={bCent} onClick={cambiarCent}>Centro</button>
            <button disabled={bDer} onClick={cambiarDer}>Derecha</button>
        </>
    )
}