import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { borrarFavoritos } from "../redux/grilla-slice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const favoritos = useAppSelector(state => state.grilla.favoritos);
    const dispatch = useAppDispatch();

    const vaciarFavoritos = (favoritos) => {
        dispatch(borrarFavoritos(favoritos));
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => vaciarFavoritos(favoritos)}>Borrar todo</button>
        </div>
        <GrillaPersonajes personajes={favoritos}/>
    </div>
}

export default PaginaFavoritos;