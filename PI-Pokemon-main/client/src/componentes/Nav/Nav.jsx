import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";


const Nav = () => {
    return(
        <>
            <div className={style.header}>
                <nav> 
                    <NavLink to='/home' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/favorites' >Favorites</NavLink>
                </nav>
                <SearchBar></SearchBar>
            </div>
        </>
    )
}
export default Nav;