import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Personaje {
    id: number,
    name: string,
    image: string
};

interface grillaInicial {
    personajes: Personaje[],
    favoritos: Personaje[],
    loading: boolean,
    mensajeError: string
};

const initialState: grillaInicial = {
    personajes: [],
    favoritos: [],
    loading: false,
    mensajeError: ''
};

export const getPersonajes = createAsyncThunk(
    'grilla/personajes',
    async (page: number) => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const parseRespuesta = await respuesta.json();
        return parseRespuesta.results;
    }
);

const grillaSlice = createSlice({
    name: 'grilla',
    initialState,
    reducers: {
        handleFavorito: (state, action) => {
            if(!state.favoritos.find(favorito => favorito.id === action.payload.id)){
                state.favoritos.push(action.payload);
            } else{
                state.favoritos = state.favoritos.filter(favorito => favorito.id !== action.payload.id);
            }
        },
        borrarFavoritos: (state) => {
            state.favoritos = initialState.favoritos;
        }
    },
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

export const { handleFavorito, borrarFavoritos } = grillaSlice.actions;
export default grillaSlice.reducer;