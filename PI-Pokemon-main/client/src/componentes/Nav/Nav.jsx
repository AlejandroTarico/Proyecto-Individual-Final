import { Link, NavLink, useLocation } from "react-router-dom";
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";


const Nav = ({onSearch}) => {
    const handleFilterClick = () => {
        onSearch(true);
    };
    const handleHomeClick = () => {
        onSearch(false);
    };
    const location = useLocation();


    return(
        <>
            <div className={style.header}>
                <nav> 
                    <NavLink to='/home' onClick={handleHomeClick}>Inicio</NavLink>
                    {location.pathname === '/home' && (
                        <Link onClick={handleFilterClick}>Filtrar</Link>
                    )}
                    <NavLink to='/formulario' >Formulario</NavLink>
                </nav>
                <SearchBar></SearchBar>
            </div>
        </>
    )
}
export default Nav;