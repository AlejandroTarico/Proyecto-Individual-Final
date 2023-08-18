import style from "./SearchBar.module.css"
import { connect } from "react-redux";
import { SearchNameDbApi } from "../../redux/actions"; 
import { useState } from "react";

const SearchBar = ({SearchNameDbApi}) => {
    const [inputValue, setInputValue] = useState("");

    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };    
    const handleSearch = () => {
        SearchNameDbApi(inputValue);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SearchNameDbApi(inputValue);
        }
    };

    return (
        <div className={style.searchStyle}>
            <input className={style.inputSearch} placeholder='Ingresá un nombre'  value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button  className={style.buttonSearch}  type="button" onClick={handleSearch}>Buscar</button>
        </div>
    )

}

const mapDispatchToProps = {
    SearchNameDbApi
}; 

export default connect(null, mapDispatchToProps)(SearchBar);
