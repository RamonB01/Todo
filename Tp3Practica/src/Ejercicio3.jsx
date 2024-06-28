import { useState } from "react"

export default function Ejercicio3(){

    const [direccion,setDireccion] = useState("row")
    const [justificado,setJustificado] = useState("center")
    const [alineado,setAlineado] = useState("center")

    return (
        <>
            <div style={{
                display: "flex",flexDirection: direccion,justifyContent: justificado,alignItems: alineado,width: "300px",height: "400px",border: "5px solid black"}}>
                <div style={{backgroundColor: "red",color: "white",textAlign: "center",margin: "5px",padding: "10px"}}>
                    1
                </div>
                <div style={{backgroundColor: "green",color: "white",textAlign: "center",margin: "5px",padding: "10px"}}>
                    2
                </div>
                <div style={{backgroundColor: "blue",color: "white",textAlign: "center",margin: "5px",padding: "10px"}}>
                    3
                </div>
            </div>
            <label htmlFor="">Seleccione Dirección  </label>
            <select name="" id="" value={direccion} onChange={(e)=>setDireccion(e.target.value)}>
                <option selected value="" disabled>--seleccione direccion--</option>
                <option value="row">Fila</option>
                <option value="column">Columna</option>
                <option value="row-reverse">Fila Inversa</option>
                <option value="column-reverse">Columna Inversa</option>
            </select><br />
            <label htmlFor="">Seleccione Justificado  </label>
            <select name="" id="" value={justificado} onChange={(e)=>setJustificado(e.target.value)}>
                <option selected value="" disabled>--seleccione justificado--</option>
                <option value="flex-start">Inicio</option>
                <option value="center">Centro</option>
                <option value="flex-end">Final</option>
            </select><br />
            <label htmlFor="">Seleccione Alineado  </label>
            <select name="" id="" value={alineado} onChange={(e)=>setAlineado(e.target.value)}>
                <option selected value="" disabled>--seleccione alineado--</option>
                <option value="flex-start">Inicio</option>
                <option value="center">Centro</option>
                <option value="flex-end">Final</option>
                <option value="stretch">Estirar</option>
            </select>
        </>
    )

}