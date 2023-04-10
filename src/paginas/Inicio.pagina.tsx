import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { borrarBusqueda, buscarPersonaje, getPersonajes, getPersonajesFiltrados } from '../redux/grilla-slice';
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 * Esta es la página principal. Aquí se deberá ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns {JSX.Element} Página de inicio
 */
const PaginaInicio = () => {
    const [page, setPage] = useState<number>(1);
    const dispatch = useAppDispatch();
    const personajes = useAppSelector(state => state.grilla.personajes);
    const value = useAppSelector(state => state.grilla.input);
    const inputRef = useRef<HTMLInputElement>(null);
    const [filtro, setFiltro] = useState<string>(value);

    useEffect(() => {
        dispatch(buscarPersonaje(filtro));
        dispatch(getPersonajesFiltrados(filtro));
    }, [filtro]);

    useEffect(() => {
        dispatch(getPersonajes(page));
        inputRef?.current?.focus();
    }, [page]);

    const handleProx = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page - 1);
    }

    const limpiarFiltro = () => {
        setFiltro('');
        dispatch(borrarBusqueda());
        inputRef?.current?.focus();
        dispatch(getPersonajes(1));
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => limpiarFiltro()}>Limpiar filtro</button>
        </div>
        <Filtros inputRef={inputRef} busqueda={(e: ChangeEvent<HTMLInputElement>) => setFiltro(e.target.value)} value={filtro}/>
        <Paginacion prev={() => handlePrev()} prox={() => handleProx()} page={page}/>
        <GrillaPersonajes personajes={personajes}/>
        <Paginacion prev={() => handlePrev()} prox={() => handleProx()} page={page}/>
    </div>
}

export default PaginaInicio;