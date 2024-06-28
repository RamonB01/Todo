
    const textoInput = document.getElementById("input")
    const textoPe = document.getElementById("texto")
    textoInput.oninput = () => {textoPe.innerText = textoInput.value};

