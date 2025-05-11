import { configureStore } from "@reduxjs/toolkit";
import { MaestrosSlice } from "./slices/maestrosSlice";

export default configureStore({
    reducer: {
        listarMaestros: listarMaestrosSlice
    }
})