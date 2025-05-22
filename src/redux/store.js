import { configureStore } from "@reduxjs/toolkit";
import listarMaestrosReducer from "./slices/maestrosSlice";

export default configureStore({
    reducer: {
        listarMaestros: listarMaestrosReducer
    }
});