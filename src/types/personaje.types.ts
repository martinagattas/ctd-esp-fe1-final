export interface Personaje {
    id: number,
    name: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string
};