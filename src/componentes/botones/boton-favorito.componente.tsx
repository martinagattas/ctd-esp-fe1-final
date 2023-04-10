import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { handleFavorito } from '../../redux/grilla-slice';
import { Personaje } from '../../types/personaje.types';

interface Props{
    esFavorito: boolean;
    onClick: Personaje;
}

/**
 * Botón que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo.
 * 
 * Deberás tipar las propiedades si usas este componente.
 * 
 * @param {Object} props Propiedades que hereda el componente
 * @param {boolean} props.esFavorito Propiedad que indica si el personaje es o no favorito
 * @param {Object} props.onClick Objeto personaje que se pasa como parámetro a la función toggleFavorito para guardarlo o eliminarlo del array de favoritos según se esté marcando o desmarcando como tal
 * @returns un JSX element 
 */
const BotonFavorito = ({ esFavorito, onClick }: Props) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
    const dispatch = useAppDispatch();

    const toggleFavorito = (personaje: Personaje) => {
        dispatch(handleFavorito(personaje));
    }

    return <div className="boton-favorito" onClick={() => toggleFavorito(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;