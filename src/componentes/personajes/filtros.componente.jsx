import './filtros.css';

const Filtros = ({inputRef, busqueda, value}) => {
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={value} onChange={busqueda} ref={inputRef}/>
    </div>
}

export default Filtros;