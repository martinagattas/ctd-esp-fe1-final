import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Personaje {
    id: number,
    name: string,
    image: string
};

interface grillaInicial {
    personajes: Personaje[],
    favoritos: Personaje[],
    input: string,
    loading: boolean,
    error: string
};

const initialState: grillaInicial = {
    personajes: [],
    favoritos: [],
    input: '',
    loading: false,
    error: ''
};

export const getPersonajes = createAsyncThunk(
    'grilla/personajes',
    async (page: number) => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const parseRespuesta = await respuesta.json();
        return parseRespuesta.results;
    }
);

export const getPersonajesFiltrados = createAsyncThunk(
    'grilla/personaje',
    async (name: string) => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
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
        },
        buscarPersonaje: (state, action) => {
            state.input = action.payload;
        },
        borrarBusqueda: (state) => {
            state.input = initialState.input;
        }
    },
    extraReducers: (builder) => {
    builder
        .addCase(getPersonajes.pending, (state) => {
            state.loading = true;
            state.personajes = initialState.personajes;
            state.error = initialState.error;
        })
        .addCase(getPersonajes.fulfilled, (state, action) => {
            state.loading = false;
            state.personajes = action.payload;
            state.error = initialState.error;
        })
        .addCase(getPersonajes.rejected, (state) => {
            state.loading = false;
            state.personajes = initialState.personajes;
            state.error = 'No se encontró ningún personaje';
        })
        .addCase(getPersonajesFiltrados.pending, (state) => {
            state.loading = true;
            state.personajes = initialState.personajes;
            state.error = initialState.error;
        })
        .addCase(getPersonajesFiltrados.fulfilled, (state, action) => {
            state.loading = false;
            state.personajes = action.payload;
            state.error = initialState.error;
        })
        .addCase(getPersonajesFiltrados.rejected, (state) => {
            state.loading = false;
            state.personajes = initialState.personajes;
            state.error = 'No se encontró ningún personaje';
        })
    }
});

export const { handleFavorito, borrarFavoritos, buscarPersonaje, borrarBusqueda } = grillaSlice.actions;
export default grillaSlice.reducer;