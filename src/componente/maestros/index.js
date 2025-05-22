import { Button } from "react-bootstrap"
import Formulario from "./formulario"
import Tabla from "./tabla"
import { useState } from "react"

function Maestros() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleCambioFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const handleObtener = () => {
        console.log("Obtener maestros");
        // Aquí puedes hacer dispatch(listarMaestros())
    };

    const handleModificar = () => {
        console.log("Modificar maestro");
        // Aquí podrías abrir el formulario cargando un maestro seleccionado
    };

    return (
        <>
            <h1 className="text-center">Este es nuestro componente Maestros</h1>
            {mostrarFormulario ? (
                <>
                    <Formulario />
                    <div className="mt-3">
                        <Button variant="warning" onClick={handleCambioFormulario}>
                            Regresar
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className="d-flex justify-content-center gap-3 mt-3">
                        <Button variant="primary" onClick={handleCambioFormulario}>
                            Nuevo
                        </Button>
                        <Button variant="info" onClick={handleObtener}>
                            Obtener
                        </Button>
                        <Button variant="secondary" onClick={handleModificar}>
                            Modificar
                        </Button>
                    </div>
                    <Tabla />
                </>
            )}
        </>
    );
}

export default Maestros;
