import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Personaje } from '../../types/personaje.types';

interface Props{
    personajes: Personaje[];
}

/**
 * Grilla de personajes para la página de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes.
 * 
 * @param {Object} props Propiedades que hereda el componente
 * @param {Array<Object>} props.personajes Array de personajes
 * @returns {JSX.Element} Grilla de personajes
 */
const GrillaPersonajes = ({personajes}:Props) => {
    return <div className="grilla-personajes">
        {
            personajes?.map((personaje) => (
                <TarjetaPersonaje personaje={personaje} key={personaje.id} />
            ))
        }
    </div>
}
 
export default GrillaPersonajes;