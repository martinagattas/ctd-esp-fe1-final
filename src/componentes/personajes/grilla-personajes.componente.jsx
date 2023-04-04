import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { getPersonajes } from '../../redux/grilla-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useState, useEffect } from 'react';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

const GrillaPersonajes = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const grilla = useAppSelector(state => state.grilla);

    useEffect(() => {
        dispatch(getPersonajes(page));
    }, [page])

    return <div className="grilla-personajes">
        {
            grilla?.personajes?.map((personaje) => (
                <TarjetaPersonaje personaje={personaje} key={personaje.id} />
            ))
        }
    </div>
}
 
export default GrillaPersonajes;