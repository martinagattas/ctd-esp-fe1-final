import './filtros.css';

interface Props{
    inputRef: React.RefObject<HTMLInputElement>;
    busqueda: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

/**
 * Filtro de personajes para la página de inicio
 * 
 * @param {Object} props Propiedades que hereda el componente
 * @param {React.RefObject<HTMLInputElement>} props.inputRef Elemento HTML donde el usuario ingresa el texto de búsqueda
 * @param {function} props.busqueda Función para buscar personajes
 * @param {string} props.value Valor del elemento HTML donde el usuario ingresa el texto de búsqueda
 * @returns {JSX.Element} Filtro de personajes
 */
const Filtros = ({inputRef, busqueda, value}: Props) => {
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={value} onChange={busqueda} ref={inputRef}/>
    </div>
}

export default Filtros;