import { useState } from "react"

export default function Ejercicio4(){

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido]=useState("")
    const [edad,setEdad]=useState("")
    const [altura,setAltura]=useState("")
    const [email,setEmail] = useState("")
    const [mensaje,setMensaje] = useState("Validación")
    const [colorM,setColorM] =useState("black")

    const enviarFormulario=(e)=>{
        e.preventDefault()
        if (nombre === ""){
            setMensaje("Nombre Vacio"); setColorM("red")
        } else if (apellido === ""){
            setMensaje("Apellido Vacio"); setColorM("red")
        } else if(edad === ""){
            setMensaje("Edad Vacio"); setColorM("red")
        } else if (edad < 0){
            setMensaje("Edad no puede ser Negativo"); setColorM("red")
        } else if (edad < 18){
            setMensaje("No puede ser menor de Edad"); setColorM("red")
        } else if(altura === ""){
            setMensaje("Altura Vacia"); setColorM("red")
        } else if (altura < 0){
            setMensaje("Altura no puede ser Negativo"); setColorM("red")
        } else if (altura >= 230){
            setMensaje("Altura no puede ser mayor a 230(cm)"); setColorM("red")
        } else if (email === ""){
            setMensaje("Email Vacio"); setColorM("red")
        } else if (!email.includes("@")){
            setMensaje("Email debe incluir '@"); setColorM("red")
        } else {setMensaje("Todo Correcto"); setColorM("green")}

    }

    return(
        <>
            <form action="" id="formulario" onSubmit={enviarFormulario}>
                <label htmlFor="">Nombre: </label><br />
                <input type="text" name="nombre" id="nombre" maxLength={50} value={nombre} onChange={(e)=>setNombre(e.target.value)} /><br />
                <label htmlFor="">Apellido: </label><br />
                <input type="text" name="apellido" id="apellido" maxLength={50} value={apellido} onChange={(e)=>setApellido(e.target.value)} /><br />
                <label htmlFor="">Edad: </label><br />
                <input type="number" name="" id="edad" min={0} value={edad} onChange={(e)=>setEdad(e.target.value)} /><br />
                <label htmlFor="">Altura: </label><br />
                <input type="number" name="" id="altura" value={altura} onChange={(e)=>setAltura(e.target.value)} /><br />
                <label htmlFor="">Email: </label><br />
                <input type="text" name="" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                <button type="submit">Enviar</button>
                <p style={{color: colorM}}>{mensaje}</p>
            </form>

        </>
    )


}