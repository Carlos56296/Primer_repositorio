import { createSlice } from "@reduxjs/toolkit";
import { agregarMaestros, listarMaestros } from "../axios/maestrosActions";

const initialState = {
    usuarios: [],
    usuario: {},
    loading: false,
    error: null,
};

const listarMaestrosSlice = createSlice({
    name: "listarMaestros",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(listarMaestros.pending, (state) => {
                state.usuarios = [];
                state.loading = true;
            })
            .addCase(listarMaestros.fulfilled, (state, action) => {
                state.usuarios = action.payload;
                state.loading = false;
            })
            .addCase(listarMaestros.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(agregarMaestros.fulfilled, (state, action) => {
                state.usuarios.push(action.payload);
            });
    },
});

export default listarMaestrosSlice.reducer;