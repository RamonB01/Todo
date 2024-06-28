import { useEffect, useState } from "react"

export default function Ejercicio2(){

    const [peso,setPeso] = useState()
    const [altura,setAltura] = useState()
    const [imc,setImc] = useState(0)
    const [nivel,setNivel] =useState("Sin Determinar")
    const [color,setColor]=useState("black")

    const calcularIMC=()=>{
        return setImc(peso/(altura*altura))
    }

    useEffect(() => {
        if (imc < 18.5 && imc > 0) {
            setNivel("Bajo");
            setColor("yellow");
        } else if (imc >= 18.5 && imc <= 24.9) {
            setNivel("Normal");
            setColor("green");
        } else if (imc >= 25 && imc <=29.9) {
            setNivel("Sobrepeso");
            setColor("orange");
        } else if (imc >= 30) {
            setNivel("Obesidad");
            setColor("red")
        } else {
            setNivel("Sin Determinar");
            setColor("black");
        }
    }, [imc]);

    const handleNivel = () => {
        calcularIMC();
    };

    // const handleImc=()=>{
    //     useEffect(()=>{calcularIMC()})
        
    //     nivelImc()
    // }



    return(
        <>
            <p>Peso (kg):</p>
            <input type="number" value={peso} onChange={(e)=>setPeso(e.target.value)} />
            <p>Altura (mts):</p>
            <input type="number" value={altura} onChange={(e)=>setAltura(e.target.value)} /><br /><br />
            <button onClick={handleNivel}>Calcular IMC</button>
            <p>IMC: {imc}</p>
            <p>Nivel: <span style={{color}}>{nivel}</span></p>
        </>
    )
}