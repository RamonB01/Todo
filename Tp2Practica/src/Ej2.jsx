import { useState } from "react"

export default function Ej2(){

    const [texto, setTexto] = useState("")
    const [textoP, setTextoP] = useState("Predeterminado")

    const modificar=()=>{
        setTextoP(texto)
    }

    return(
        <>
            <p>{textoP}</p>
            <input type="text" value={texto} onChange={(e)=>setTexto(e.target.value)} />
            <button onClick={modificar}>Modificar</button>
        </>
    )

}