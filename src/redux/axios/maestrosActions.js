import { createAsyncThunk } from "@reduxjs/toolkit";
import maestrosReducer from "../slices/maestrosSlice";
import axios from "axios";

export const listarMaestros = createAsyncThunk("componente/listarMaestros",
  async (_ , { rejectWithValue }) => {
    try {
      const response = await axios.get("URL");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const agregarMaestros = createAsyncThunk("maestros/agregarMaestros",
  async (nuevoMaestro, { rejectWithValue }) => {
    try {
      const response = await axios.get("URL");
      return response.data; // Simula que la API devuelve el mismo objeto
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);