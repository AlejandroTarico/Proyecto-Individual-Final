// import store from "../../redux/store.js"
import style from "./navBotons.module.css"
import { connect } from "react-redux";
import { typesPokemons, filterByTypes, filterBySort, filterByAttack } from "../../redux/actions"; 
import { useEffect } from "react"

const NavBotons = ({types, typesPokemons, filterByTypes, filterBySort, filterByAttack}) => {
// const tipos = store.getState().types;
// console.log("esto es lo que obtengo del estore: ", tipos); // ESto me serviria si y solo si, hiciera que la peticion a
// los typos se realice en el momento que se ingresa a la pagina, como si pasa con los pokemons.

    useEffect(() => {
        typesPokemons(); // Llamo al para obtener los tipos de pokemons.
    }, [typesPokemons]);

    return(
        <>
            <div className={style.header}>
                <div className={style.cajaSelects}>
                    <div className={style.containerSelect}>
                        <span className={style.textSpan}>Por Tipo</span>
                        <select className={style.inputText} defaultValue='tipos' onChange={(e) => filterByTypes(e.target.value)}>
                            <option className= {style.textSelect} value="Types" hidden>Tipos</option>
                            <option className= {style.textSelect} value="allTypes">Todos los Tipos</option>
                            {types && types.map(type => (
                                <option className= {style.textSelect} key={type.id} value={type.name}> {/* PARA NO CONFUNDIRME PORTANTOS TYPE Y TYPES, ESTE TYPE ES UNA VARIABLE QUE SE CREA PARA EL MAP E IR RENDERIZANDO EL CONTENIDO DE TYPES EL CUAL CONTIENE LA INFORMACION OBTENIDA DE LA BASE DE DATOS */}
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={style.containerSelect}>
                        <span className={style.textSpan}>Ordenar Alfabeticamente</span>
                        <select className={style.inputText} onChange={(e) => filterBySort(e.target.value)}>
                            <option value="" hidden>Selecciona</option>
                            <option className= {style.textSelect} value="ascendente">Ascendente</option>
                            <option className= {style.textSelect} value="descendente">Descendente</option>
                        </select>
                    </div>
                    <div className={style.containerSelect}>
                        <span className={style.textSpan}>Ordenar Por Ataque</span>
                        <select className={style.inputText} onChange={(e) => filterByAttack(e.target.value)}>
                            <option value="" hidden>Selecciona</option>
                            <option className= {style.textSelect} value="debil">Debil a Fuerte</option>
                            <option className= {style.textSelect} value="fuerte">Fuerte a Debil</option>
                        </select>
                    </div>
                    <div className={style.containerSelect}>
                        <span className={style.textSpan}>Origen</span>
                        <select className={style.inputText} name="" id="">
                            <option value="" hidden>Selecciona</option>
                            <option className= {style.textSelect} value="">Api</option>
                            <option className= {style.textSelect} value="">DataBase</option>
                        </select>
                    </div>
                </div>
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
    filterBySort,
    filterByAttack
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBotons);
