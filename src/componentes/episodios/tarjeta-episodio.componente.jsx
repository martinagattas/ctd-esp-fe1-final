import { useEffect, useState } from 'react';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({url}) => {
    const [episodio, setEpisodio] = useState();

    const getEpisodio = async(url) => {
        const respuesta = await fetch(url);
        const parseRespuesta = await respuesta.json();
        setEpisodio(parseRespuesta);
        return parseRespuesta;
    }

    useEffect(() => {
        getEpisodio(url);
    }, []);

    return <div className="tarjeta-episodio">
        <h4>{episodio?.name}</h4>
        <div>
            <span>{episodio?.episode}</span>
            <span>Lanzado el: {episodio?.air_date}</span>
        </div>
    </div>
}

export default TarjetaEpisodio;