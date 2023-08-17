import style from './Card.module.css'
import {Link} from 'react-router-dom'



function Card(props) {
   const{id, nombre, imagen, types}= props; //Estoy haciendo un distroctoring al props
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
                    {/* {tipo && tipo.map((type, index) => (
                        <span key={index} className={style.type}>
                            {type.tipo}
                            {index !== tipo.length - 1 && 
                            <span className={style.typeSeparator}>{" "}-{" "}</span>}
                        </span>
                    ))} */}
                    {types && types.map((type, index) => (
                        <span key={index} className={style.type}>
                            {type.name}
                            {index !== types.length - 1 && 
                            <span className={style.typeSeparator}>{" "}-{" "}</span>}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
};
export default Card;