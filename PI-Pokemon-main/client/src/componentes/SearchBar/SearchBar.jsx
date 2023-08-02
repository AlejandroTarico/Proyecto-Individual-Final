import style from "./SearchBar.module.css"


const SearchBar = () => {
    return (
        <div className={style.searchStyle}>
            <input className={style.inputSearch} placeholder='Ingresá un nombre' type='search' />
            <button  className={style.buttonSearch}  type="submit">Agregar</button>
        </div>
    )

}

export default SearchBar;