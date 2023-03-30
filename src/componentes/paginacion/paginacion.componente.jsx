import './paginacion.css';
import { getPersonajes } from '../../redux/grilla-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useState, useEffect } from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPersonajes(page));
    }, [page])

    const handleProx = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page - 1);
    }

    return <div className="paginacion">
        <button onClick={handlePrev} disabled={page > 1 ? false : true} className={"primary"}>Anterior</button>
        <button onClick={handleProx} disabled={false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;