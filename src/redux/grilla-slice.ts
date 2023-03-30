import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Personaje {
    id: number,
    name: string,
    image: string
};

interface grillaInicial {
    personajes: Personaje[],
    loading: boolean,
    mensajeError: string
};

export const getPersonajes = createAsyncThunk(
    'grilla/personajes',
    async (page: number) => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const parseRespuesta = await respuesta.json();
        return parseRespuesta.results;
    }
);

const initialState: grillaInicial = {
    personajes: [],
    loading: false,
    mensajeError: ''
};

const grillaSlice = createSlice({
    name: 'grilla',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(getPersonajes.pending, (state) => {
            state.loading = true;
        })
        .addCase(getPersonajes.fulfilled, (state, action) => {
            state.loading = false;
            state.personajes = action.payload;
        })
        .addCase(getPersonajes.rejected, (state, action) => {
            state.loading = false;
            state.mensajeError = 'Apa, no cargó'
        })
    }
});

export default grillaSlice.reducer;