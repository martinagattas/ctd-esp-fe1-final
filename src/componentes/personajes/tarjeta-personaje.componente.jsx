import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personaje}) => {
    const favoritos = useAppSelector((state) => state.grilla.favoritos);
    const esFavorito = favoritos.find(favorito => favorito.id === personaje.id);
    const detallePersonaje = useNavigate();
    const verDetallePersonaje = () => {
        detallePersonaje(`/detalle/${personaje.id}`);
    }

    return <div className="tarjeta-personaje" onClick={verDetallePersonaje}>
        <img src={personaje.image} alt={personaje.name} />
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={esFavorito ? true : false} onClick={personaje} />
        </div>
    </div>
}

export default TarjetaPersonaje;