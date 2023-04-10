import { Personaje } from "./personaje.types"

export interface Grilla {
    personajes: Personaje[],
    favoritos: Personaje[],
    personaje: Personaje,
    input: string,
    loading: boolean,
    error: string
};