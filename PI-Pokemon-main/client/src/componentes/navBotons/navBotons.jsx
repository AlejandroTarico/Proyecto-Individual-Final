import style from "./navBotons.module.css"

const NavBotons = () => {
    return(
        <>
            <div className={style.header}>
                <nav>
                    <div>
                        <span>Por Tipo</span>
                        <select name="" id="">
                            <option value="">a</option>
                            <option value="">b</option>
                            <option value="">c</option>
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
                        <select name="" id="">
                            <option value="">Ascendente</option>
                            <option value="">Descendente</option>
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

export default NavBotons;