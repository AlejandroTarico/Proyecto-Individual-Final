import { useState, useEffect } from "react";
import Card from "../Card/Card";
import style from "./PokeCards.module.css";
import axios from "axios";
import Pagination from '../Utils/Pagination/Paginacion'; // Importa el componente Pagination.



const PokeCards = (props) => {
    const [pokechars, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Número de elementos por página.
    
    
    // Función para obtener los elementos correspondientes a la página actual.
    const getCurrentItems = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return pokechars.slice(indexOfFirstItem, indexOfLastItem);
    };
    
    const totalPages = Math.ceil(pokechars.length / itemsPerPage);


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


    //......... SECCION DONDE SOLICITO TODOS LOS POKEMONS ................//
    useEffect (() => {  // Uso useEffect para controlar cuándo se realiza la solicitud al backend. Esto asegura que la petición solo se realice cuando sea necesario.
        const fetchdata = async () => { // Con async, función asincronica puedo hacer que el código sea más legible y fácil de mantener.
        try {  // Con try puedo manejar mejor los errores que pudieran ocurrir con a solicitud
            const {data} = await axios("http://localhost:3001/pokemons");
            setCharacters(data);
            
        } catch (error) {
            Error('No se pudo obtener la informacion: ', error);
    
        }
        } 
        fetchdata();
    }, []);
 //........... FIN DE LA SECCIÓN DE LA PETICIÓN DE POKEMONS ..............//

 
    return (
        <>
            <div className={style.cardFLex}>
                {getCurrentItems().map((poke) => {
                    return <Card key={poke.id}
                    id= {poke.id} 
                    nombre= {poke.nombre}
                    tipo={poke.tipo} 
                    imagen= {poke.imagen}
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
export default PokeCards;
