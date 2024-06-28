import { useState } from "react";

export default function Contador(){
    const [incre, setIncre] = useState(0)

    const incrementar = () => {
        setIncre(incre+1)
    }

    const decrementar = () => {
        setIncre(incre-1)
    }   
    

    return (
        <>
            <p>{incre}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    )


}