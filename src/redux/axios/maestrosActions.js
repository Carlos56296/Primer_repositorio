import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listarMaestros = createAsyncThunk("componente/listarMaestros",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get("URL");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);