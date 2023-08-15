import { useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
import { connect } from "react-redux";
import { searchPokemonsId } from "../../redux/actions"; 


const Detail = ({ pokemon, searchPokemonsId }) => {
  const {id} = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        await searchPokemonsId(id); // Llamo al actions para obtener los pokémons.
      } catch (error) {
        console.error('Error al obtener los pokémons:', error);
      }
    };
  
    fetchData();
  }, [searchPokemonsId, id]);
  
 
  return (
    pokemon ?
    <div className={style.containerCard}>
        <h2 className={style.textTitle}>{pokemon.nombre}</h2>
        <div className={style.cajaImg}>
          <img className={style.designImg} src={pokemon.imagen} alt='' />

        </div>
        <div className={style.cardFLex}>
          <h2 className={style.text}>Vida: {pokemon.vida}</h2>
          <h2 className={style.text}>Ataque: {pokemon.ataque}</h2>
          <h2 className={style.text}>Defensa: {pokemon.defensa}</h2>
          <h2 className={style.text}>Velocidad: {pokemon.velocidad}</h2>
          <h2 className={style.text}>Altura: {pokemon.altura}</h2>
          <h2 className={style.text}>Peso: {pokemon.peso}</h2>
        </div>
        <h2 className={style.text}> Tipo/s: 
          {pokemon.tipo && pokemon.tipo.map((type, index) => (
            <span key={index} className={style.type}>
                {" " + type.tipo}
                {index !== pokemon.tipo.length - 1 && 
                <span className={style.typeSeparator}>{" "}-{" "}</span>}
            </span>
          ))}
          {pokemon.types && pokemon.types.map((type, index) => (
            <span key={index} className={style.type}>
                {" " + type.name}
                {index !== pokemon.types.length - 1 && 
                <span className={style.typeSeparator}>{" "}-{" "}</span>}
            </span>
          ))}
        </h2>
    </div> 
    :

    <h1>Loading...</h1>
  )
}
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokeId // Mapea el estado de los pokémons desde el store al componente.
  };
};

const mapDispatchToProps = {
  searchPokemonsId // Mapea la acción para obtener los pokémons al componente.
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);