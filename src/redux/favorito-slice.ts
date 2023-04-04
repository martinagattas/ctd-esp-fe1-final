import { createSlice } from "@reduxjs/toolkit"

interface Favorito {
    id: number,
    esFavorito: boolean
};

interface favoritoInicial {
    favoritos: Favorito[]
};

const initialState: favoritoInicial = {
    favoritos: []
};

const favoritoSlice = createSlice({
    name: 'favorito',
    initialState,
    reducers: {
        handleFavorito: (state, action) => {
            const { id, esFavorito } = action.payload;
            const indiceFavorito = state.favoritos.findIndex((favorito) => favorito.id === action.payload);
            if (indiceFavorito !== -1) {
                state.favoritos.splice(indiceFavorito, 1);
            } else {
                state.favoritos.push({id: action.payload, esFavorito: true});
            }
        }
    }
});

export const { handleFavorito } = favoritoSlice.actions;
export default favoritoSlice.reducer;