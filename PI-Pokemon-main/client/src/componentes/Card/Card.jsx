// import { useState } from 'react';
// import { addFav, removeFav } from '../../redux/actions';
import style from './Card.module.css'
import {Link} from 'react-router-dom'
// import { connect } from "react-redux";
// import { useEffect } from 'react';


function Card(props) {
   const{id, nombre, imagen, tipo}= props; //Estoy haciendo un distroctoring al props
   
//    tipo.map((type) => {
//         console.log("Esto es lo que llega a la pokeCards", type.tipo)
//         console.log("-");
//    })

   //    console.log("Imagen obtenida", props);
//    const [isFav, setIsFav] = useState(false)

//    useEffect(() => {
//       myFavorites.forEach((fav) => {
//          if (fav.id === props.id) {
//             setIsFav(true);
//          }
//       });
//    }, [myFavorites]);
   
//    const handleFavorite = () => {
//       isFav ? removeFav(id) : addFav(props) 
//       setIsFav(!isFav)
//    }

    return (
        <div className={style.cardPoke}>
            <Link className={style.namePoke} to={`/detail/${id}`}>
                <h2 className={style.text}>{nombre}</h2>
            </Link>
                {/* {outClose ? null : <button className={style.cierreCard} onClick={()=>{onClose(id);} }>X</button>}  */}
            <img className={style.img} src={imagen} alt='' />
            <div className={style.ss}> 
                <h2 className={style.typeText}>
                    {/* { tipo.map((types) => types.tipo + " ") } */}
                    {tipo && tipo.map((type, index) => (
                        <span key={index} className={style.type}>
                            {type.tipo}
                            {index !== tipo.length - 1 && 
                            <span className={style.typeSeparator}>{" "}-{" "}</span>}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
};
//    const mapDispatchToProps = (dispatch) => {
//       return {
//          addFav: (characters) => {
//             dispatch(addFav(characters))
//          },
//          removeFav: (id) => {
//             dispatch(removeFav(id))
//          }
//       }
//    }
// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

export default Card;
// connect(mapStateToProps, mapDispatchToProps)(Card); 