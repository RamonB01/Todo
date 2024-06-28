import { useState } from "react"

export default function Ej5(){

    const [colorT,setColorT]=useState("")
    const [colorF,setColorF]=useState("")

    const colores = ["black", "white", "green", "gray", "blue", "yellow"]

    return(
        <>
            <p style={{color: colorT , background: colorF}}>Predeterminado</p>
            <label htmlFor="">Color Letra: </label>
            <select name="" id="" value={colorT} onChange={(e)=>setColorT(e.target.value)} >
                <option value="" disabled>Seleccione color de Letra</option>
                <option value="black">Negro</option>
                <option value="white">Blanco</option>
                <option value="green">Verde</option>
                <option value="gray">Gris</option>
                <option value="blue">Azul</option>
                <option value="yellow">Amarillo</option>
            </select><br />
            <label htmlFor="">Color Fondo: </label>
            <select name="" id="" value={colorF} onChange={(e)=>setColorF(e.target.value)}>
                <option value="" disabled>Seleccione color de Fondo</option>
                <option value="black">Negro</option>
                <option value="white">Blanco</option>
                <option value="green">Verde</option>
                <option value="gray">Gris</option>
                <option value="blue">Azul</option>
                <option value="yellow">Amarillo</option>
            </select>
        </>
    )

}