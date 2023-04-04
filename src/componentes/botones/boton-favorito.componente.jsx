import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { handleFavorito } from '../../redux/favorito-slice';

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({ esFavorito, onClick, idFavorito }) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
    const dispatch = useAppDispatch();

    const toggleFavorito = (id, esFavorito) => {
        dispatch(handleFavorito(id, esFavorito));
    }

    return <div className="boton-favorito" onClick={() => toggleFavorito(idFavorito)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;