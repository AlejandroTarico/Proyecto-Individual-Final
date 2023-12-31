import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { fetchPokemons } from "../../redux/actions"; 
import style from "./PokeCards.module.css";
import Pagination from '../Utils/Pagination/Paginacion'; // Importa el componente Pagination.



const PokeCards = ({ pokemons, fetchPokemons, espacio }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const itemsPerPage = 12; // Número de elementos por página.
    
    
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            await fetchPokemons(); // Llamo al actions para obtener los pokémons.
          } catch (error) {
            console.error('Error al obtener los pokémons:', error);
          }
        };
      
        fetchData();
      }, [fetchPokemons]);
    
      useEffect(() => {
        setFilteredPokemons(pokemons);
        setCurrentPage(1); // Restablecer la página a 1 al cambiar los Pokémon filtrados.
    }, [pokemons]);

    
    // Función para obtener los elementos correspondientes a la página actual.
    const getCurrentItems = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return filteredPokemons.slice(indexOfFirstItem, indexOfLastItem);
    };
    
    const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);


    // Función para cambiar a la siguiente página.
    const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    // Función para cambiar a la página anterior.
    const prevPage = () => {
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
    };
 
    return (
        <>
            <div className={!espacio ? style.cardFLex : style.cardFLexFilter}>
                {getCurrentItems().map((poke) => {
                    return <Card key={poke.id}
                    id= {poke.id} 
                    nombre= {poke.nombre}
                    tipo={poke.types} 
                    imagen= {poke.imagen}
                    types= {poke.types}
                    />
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={nextPage}
                onPrevPage={prevPage}
            />
        </>
    )

}    
const mapStateToProps = (state) => {
    return {
      pokemons: state.pokemons // Mapea el estado de los pokémons desde el store al componente.
    };
  };
  
  const mapDispatchToProps = {
    fetchPokemons // Mapea la acción para obtener los pokémons al componente.
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokeCards);
