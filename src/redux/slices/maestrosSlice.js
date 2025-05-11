import { createSlice, isAction, isPending } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    usuarios: [],
    usuario: {},
    loading: false,
    error: null,
};

const listarMaestrosSlice = createSlice({
    name: "listarMaestros",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(listarMaestros.pending, (state) => {
            state.usuarios = [];
            state.loading = true;
        })
        .addCase(listarMaestros.fullfilled, (state, action) => {
            state.usuarios = action;
            state.loading = false;
        })
        .addCase(listarMaestros.Rejected, (state, action) => {
            state.loading = false;
            state.error = action;
        })
    }
})

export const MaestrosSlice = listarMaestros.reducer;