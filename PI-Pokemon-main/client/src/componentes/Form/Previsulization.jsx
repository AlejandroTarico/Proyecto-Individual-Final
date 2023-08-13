// import { useEffect, useState } from 'react';
import style from './Form.module.css'
// import { connect } from "react-redux";
// import { typesPokemons } from "../../redux/actions"; 


const Previsualization = (props) => {

    const {pokeStore, tipo} = props; 
    return (
        <div className={style.formulario}>
            <h2>Previsualización de datos</h2>
            <div className={style.containerCard}>
                <h2 className={style.text}>Nombre: {pokeStore.nombre}</h2>
                {pokeStore.imagen && (
                    <img className={style.img} 
                    src={pokeStore.imagen}
                    alt="Imagen seleccionada"
                    />
                )}
                {/* src={pokeStore.imagen} alt='' /> */}
                <div className={style.cardFLex}>
                <h2 className={style.text}>Vida: {pokeStore.vida}</h2>
                <h2 className={style.text}>Ataque: {pokeStore.ataque}</h2>
                <h2 className={style.text}>Defensa: {pokeStore.defensa}</h2>
                <h2 className={style.text}>Velocidad: {pokeStore.velocidad}</h2>
                <h2 className={style.text}>Altura: {pokeStore.altura}</h2>
                <h2 className={style.text}>Peso: {pokeStore.peso}</h2>
                </div>
                <h2 className={style.typeText}> Tipo/s: 
                {tipo && tipo.map((type, index) => (
                    <span key={index} className={style.type}>
                        {" " + type.value}
                        {index !== tipo.length - 1 && 
                        <span className={style.typeSeparator}>{" "}-{" "}</span>}
                    </span>
                ))}
                </h2>
            </div>
        </div>
    )
}

export default Previsualization;