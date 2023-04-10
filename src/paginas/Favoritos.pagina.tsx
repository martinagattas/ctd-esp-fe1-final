import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { borrarFavoritos } from "../redux/grilla-slice";

/**
 * Esta es la página de favoritos. Aquí se deberán ver todos los personajes marcados como favoritos.
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {JSX.Element} Página de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch();
    const favoritos = useAppSelector(state => state.grilla.favoritos);

    const vaciarFavoritos = () => {
        dispatch(borrarFavoritos());
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => vaciarFavoritos()}>Borrar todo</button>
        </div>
        <GrillaPersonajes personajes={favoritos}/>
    </div>
}

export default PaginaFavoritos;