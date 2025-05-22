import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Form } from 'react-bootstrap';
import { agregarMaestros } from '../../redux/axios/maestrosActions';

const initialState = {
    nombre: '',
    apellido: '',
    apodo: '',
    telefono: ''
};

function Formulario() {
    const [maestro, setMaestro] = useState(initialState);
    const dispatch = useDispatch();

    const handleEditarValores = (event) => {
        const { id, value } = event.target;
        setMaestro({ ...maestro, [id.toLowerCase()]: value });
    };

    const handleGuardarMaestro = () => {
        dispatch(agregarMaestros(maestro));
    };

    return (
        <Container>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                id="nombre"
                onChange={handleEditarValores}
            />

            <Form.Label>Apellido</Form.Label>
            <Form.Control
                type="text"
                id="apellido"
                onChange={handleEditarValores}
            />

            <Form.Label>Apodo</Form.Label>
            <Form.Control
                type="text"
                id="apodo"
                onChange={handleEditarValores}
            />

            <Form.Label>Teléfono</Form.Label>
            <Form.Control
                type="text"
                id="telefono"
                onChange={handleEditarValores}
            />

            <Button variant='success' onClick={handleGuardarMaestro}>Guardar</Button>
        </Container>
    );
}

export default Formulario;