// import store from "../../redux/store.js"
import style from "./navBotons.module.css"
import { connect } from "react-redux";
import { typesPokemons, filterByTypes, filterBySort } from "../../redux/actions"; 
import { useEffect } from "react"

const NavBotons = ({types, typesPokemons, filterByTypes, filterBySort}) => {
// const tipos = store.getState().types;
// console.log("esto es lo que obtengo del estore: ", tipos); // ESto me serviria si y solo si, hiciera que la peticion a
// los typos se realice en el momento que se ingresa a la pagina, como si pasa con los pokemons.

    useEffect(() => {
        typesPokemons(); // Llamo al para obtener los tipos de pokemons.
    }, [typesPokemons]);

    return(
        <>
            <div className={style.header}>
                <nav>
                    <div>
                        <span>Por Tipo</span>
                        <select defaultValue='tipos' onChange={(e) => filterByTypes(e.target.value)}>
                            <option  value="Types" disabled>Tipos</option>
                            <option  value="allTypes">Todos los Tipos</option>
                            {types && types.map(type => (
                                <option key={type.id} value={type.name}> {/* PARA NO CONFUNDIRME PORTANTOS TYPE Y TYPES, ESTE TYPE ES UNA VARIABLE QUE SE CREA PARA EL MAP E IR RENDERIZANDO EL CONTENIDO DE TYPES EL CUAL CONTIENE LA INFORMACION OBTENIDA DE LA BASE DE DATOS */}
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <span>Origen</span>
                        <select name="" id="">
                            <option value="">Api</option>
                            <option value="">DataBase</option>
                        </select>
                    </div>
                    <div>
                        <span>Por Ordenamiento</span>
                        <select onChange={(e) => filterBySort(e.target.value)}>
                            <option value="" disabled>Selecciona</option>
                            <option value="ascendente">Ascendente</option>
                            <option value="descendente">Descendente</option>
                        </select>
                    </div>
                    <div>
                        <span>Por Ataque</span>
                        <select name="" id="">
                            <option value="">a</option>
                            <option value="">b</option>
                            <option value="">c</option>
                        </select>
                    </div>
                </nav>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
      types: state.types // Mapea el estado de los pokémons desde el store al componente.
    };
  };
  
  const mapDispatchToProps = {
    typesPokemons, // Mapea la acción para obtener los pokémons al componente.
    filterByTypes,
    filterBySort
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBotons);
