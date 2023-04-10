import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getPersonaje } from "../redux/grilla-slice";
import { useParams } from "react-router-dom";

/**
 * Esta es la página de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece.
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns {JSX.Element} Página de detalle
 */
const PaginaDetalle = () => {
    const dispatch = useAppDispatch();
    const personaje = useAppSelector(state => state.grilla.personaje);
    const favoritos = useAppSelector(state => state.grilla.favoritos);
    const esFavorito = favoritos.find(favorito => favorito.id === personaje.id);
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id){
            dispatch(getPersonaje(+id));
        }
    }, [id]);

    return <div className="container">
        <h3>{personaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje.image} alt={personaje.image}/>
                <div className={"detalle-header-texto"}>
                    <p>{personaje.name}</p>
                    <p>Planeta: {personaje.origin.name}</p>
                    <p>Genero: {personaje.gender}</p>
                </div>
                <BotonFavorito esFavorito={esFavorito ? true : false} onClick={personaje}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {
                personaje?.episode?.map((ep, index) => (
                    <TarjetaEpisodio url={ep} key={index}/>
                ))
            }
        </div>
    </div>
}

export default PaginaDetalle