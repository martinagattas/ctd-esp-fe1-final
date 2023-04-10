import { useEffect, useState } from 'react';
import './tarjeta-episodio.css';
import { Episodio } from '../../types/episodio.types';

interface Props{
    url: string;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios.
 * 
 * @param {Object} props Propiedades que hereda el componente
 * @param {string} props.url Dirección url de los episodios en los cuales se encuentra el personaje seleccionado. Se utiliza para llamar a la api del episodio
 * @returns {JSX.Element} Tarjetas de episodios 
 */
const TarjetaEpisodio = ({url}: Props) => {
    const [episodio, setEpisodio] = useState<Episodio>();

    /**
     * Función para llamar a la api de episodios.
     * @param {string} url Dirección url del episodio al que quiero llamar
     * @returns {Object} Devuelve el episodio
     */
    const getEpisodio = async(url: string) => {
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