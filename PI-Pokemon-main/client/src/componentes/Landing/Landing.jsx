import { Link } from 'react-router-dom';
import style from './Landing.module.css'




const Landing = () => {
    return (
        <>
            <div className={style.contains}>
                <h1 className={style.title}>Encuentra tus Pokemons favoritos</h1>
            </div>
            <div className={style.contains}>
                <Link to={"/home"}>
                    <button className={style.botton}>Ingresar</button>
                </Link>
            </div>
            
        </>
    )

}

export default Landing;