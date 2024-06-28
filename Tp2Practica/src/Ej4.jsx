import { useState } from "react"

export default function Ej4(){

    const [base,setBase] = useState()
    const [altura,setAltura] = useState()

    const calcPerimetro=()=>{
        let perimetro = Number(base*2 + altura*2)
        return alert(perimetro)
    }

    const calcArea=()=>{
        let area = Number(base*altura)
        return alert(area)
    }

    return (
        <>
            <label>Base</label><br />
            <input type="number" value={base} onChange={(e)=>setBase(e.target.value)} /> <br />
            <label>Altura</label><br />
            <input type="number" value={altura} onChange={(e)=>setAltura(e.target.value)} />
            <br />
            <button onClick={calcArea}>Area</button>
            <button onClick={calcPerimetro}>perimetro</button>
        </>
    )

}