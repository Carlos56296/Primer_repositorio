import { Button } from "react-bootstrap"
import Formulario from "./formulario"
import Tabla from "./tabla"
import { useState } from "react"

function Maestros(){
    const [mostraFormulario, setMostrarFormulario] = useState(false);

    const handleCambioFormulario = () => {
        setMostrarFormulario(!mostraFormulario);
    }

    return(
        <>
                <h1>Este es nuestro componente Maestros</h1>
                {   mostraFormulario ? (
                    <>
                        <Formulario/>
                        <Button
                            variant="warning"
                            onClick={handleCambioFormulario}
                        >Regresar</Button>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={handleCambioFormulario}>Agregar</Button>
                        <Tabla/>
                    </>
                )}
        </>
    )
}
export default Maestros