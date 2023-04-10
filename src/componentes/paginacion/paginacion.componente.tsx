import './paginacion.css';

interface Props{
    prev: () => void;
    prox: () => void;
    page: number;
}
/**
 * Componente que contiene los botones para paginar.
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente.
 * 
 * @param {Object} props Propiedades que hereda el componente
 * @param {function} props.prev Función para ir a la página anterior
 * @param {function} props.prox Función para ir a la página siguiente
 * @param {number} props.page Número de página donde se encuentra parado el usuario
 * @returns {JSX.Element} Paginación de la grilla de personajes 
 */
const Paginacion = ({prev, prox, page}: Props) => {
    return <div className="paginacion">
        <button onClick={prev} disabled={page > 1 ? false : true} className={"primary"}>Anterior</button>
        <button onClick={prox} disabled={page < 41 ? false : true} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;