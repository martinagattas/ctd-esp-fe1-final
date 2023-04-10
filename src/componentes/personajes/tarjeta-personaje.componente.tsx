import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { Personaje } from '../../types/personaje.types';

interface Props{
    personaje: Personaje;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes.
 * 
 * @param {Object} props Propiedades que hereda el componente
 * @param {Object} props.personaje Objeto personaje
 * @returns {JSX.Element} Tarjeta del personaje 
 */
const TarjetaPersonaje = ({personaje}:Props) => {
    const favoritos = useAppSelector((state) => state.grilla.favoritos);
    const esFavorito = favoritos.find(favorito => favorito.id === personaje.id);

    const detallePersonaje = useNavigate();
    const verDetallePersonaje = () => {
        detallePersonaje(`/detalle/${personaje.id}`);
    }

    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name} onClick={() => verDetallePersonaje()}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={esFavorito ? true : false} onClick={personaje} />
        </div>
    </div>
}

export default TarjetaPersonaje;