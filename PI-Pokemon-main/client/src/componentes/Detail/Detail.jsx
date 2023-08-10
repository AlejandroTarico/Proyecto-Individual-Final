import axios from 'axios';
import { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
const Detail = () => {
  const {id} = useParams();
  const [pokemon, setPokemon] = useState({});


  useEffect (() => {  // Uso useEffect para controlar cuándo se realiza la solicitud al backend. Esto asegura que la petición solo se realice cuando sea necesario.
        const fetchdata = async () => { // Con async, función asincronica puedo hacer que el código sea más legible y fácil de mantener. Realizo una espera hasta obtener los datos necesarios o un error
            try {  // Con try puedo manejar mejor los errores que pudieran ocurrir con a solicitud
                const {data} = await axios(`http://localhost:3001/pokemonsapi/pokemons/${id}`);
                setPokemon(data);
                
            } catch (error) {
                window.alert('No hay un pokemon con ese ID');
            }
            // return setCharacter({});
        }
        fetchdata();
    }, [id]);
  
 
  return (
    pokemon ?
    <div className={style.containerCard}>
        <h2 className={style.text}>{pokemon.nombre}</h2>
        <img className={style.img} src={pokemon.imagen} alt='' />
        <div className={style.cardFLex}>
          <h2 className={style.text}>Vida: {pokemon.vida}</h2>
          <h2 className={style.text}>Ataque: {pokemon.ataque}</h2>
          <h2 className={style.text}>Defensa: {pokemon.defensa}</h2>
          <h2 className={style.text}>Velocidad: {pokemon.velocidad}</h2>
          <h2 className={style.text}>Altura: {pokemon.altura}</h2>
          <h2 className={style.text}>Peso: {pokemon.peso}</h2>
        </div>
        <h2 className={style.typeText}> Tipo/s: 
          {/* { pokemon.tipo && pokemon.tipo.map((types) => types.tipo + " ") } */}
          {pokemon.tipo && pokemon.tipo.map((type, index) => (
            <span key={index} className={style.type}>
                {" " + type.tipo}
                {index !== pokemon.tipo.length - 1 && 
                <span className={style.typeSeparator}>{" "}-{" "}</span>}
            </span>
          ))}
        </h2>
    </div> 
    :

    <h1>Loading...</h1>
  )
}

export default Detail