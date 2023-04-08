import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({prev, prox, page}) => {
    return <div className="paginacion">
        <button onClick={prev} disabled={page > 1 ? false : true} className={"primary"}>Anterior</button>
        <button onClick={prox} disabled={page > 41 ? false : true} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;