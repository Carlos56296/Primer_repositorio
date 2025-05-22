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
            <Form.Label>ID</Form.Label>
            <Form.Control
                type="text"
                id="ID"
                onChange={handleEditarValores}
            />

            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                id="nombre"
                onChange={handleEditarValores}
            />

            <Form.Label>Materia</Form.Label>
            <Form.Control
                type="text"
                id="materia"
                onChange={handleEditarValores}
            />

            <Form.Label>Experiencia</Form.Label>
            <Form.Control
                type="text"
                id="experiencia"
                onChange={handleEditarValores}
            />

            <Button variant='success' onClick={handleGuardarMaestro}>Guardar</Button>
        </Container>
    );
}

export default Formulario;