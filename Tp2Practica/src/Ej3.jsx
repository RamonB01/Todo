import { useState } from "react"

export default function Ej3(){

    const [numero , setNumero] = useState()

    const Signo = ({numero}) =>{
        if (numero > 0) {return <p>Es Positivo</p>}
        else if (numero < 0) {return <p>Es Negativo</p>}
        else {return <p>Es Cero</p>}
    }

    const Paridad = ({numero}) =>{
        return numero %2 === 0 ? <p>Es Par</p> : <p>Es Impar</p>
    }

    const Multiplo = ({numero}) =>{
        return numero %7 === 0 ? <p>Es Multiplo de 7</p> : <p>No es Multiplo de 7</p>
    }

    const Capicua = ({numero}) => {
        const numeroInvertido = parseInt(
            numero.toString().split("").reverse().join("")
        );
        return numero == numeroInvertido ? <p>Es Capicua</p> : <p>No es capicua</p>;
    }

    return (
        <>
            <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
            <Signo numero={numero}/>
            <Paridad numero={numero}/>
            <Multiplo numero={numero}/>
            <Capicua numero={numero+1-1}/>

        </>
    )
}
