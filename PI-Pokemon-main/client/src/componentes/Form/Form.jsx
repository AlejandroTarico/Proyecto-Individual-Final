import { useEffect, useState } from 'react';
import style from './Form.module.css'
import axios from 'axios';
import validate from './validation'


const Form = () => {

    const [types, setTypes] = useState([]);
    const [pokeStore, setpokeStore] = useState({
        nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
    });
    const [tipo, setTipo] = useState([])
    const dataToSend = {...pokeStore, tipos: tipo};
    const [errors, setErrors] = useState({});
    console.log("Esto es lo que me muestra la mierda ed tipo: ", tipo);

//........... INICIO DE LA PETICION A LA BASE DE DATOS TYPES PARA OBTENER LOS TIPOS DE POKEMON ...........//

    useEffect (() => {  // Uso useEffect para controlar cuándo se realiza la solicitud al backend. Esto asegura que la petición solo se realice cuando sea necesario.
        const fetchdata = async () => { // Con async, función asincronica puedo hacer que el código sea más legible y fácil de mantener. Realizo una espera hasta obtener los datos necesarios o un error
            try {  // Con try puedo manejar mejor los errores que pudieran ocurrir con a solicitud
                const {data} = await axios("http://localhost:3001/pokemonsdb/types");
                setTypes(data);
                
            } catch (error) {
                window.alert('No hay un pokemon con ese ID');
            }
        }
        fetchdata();
    }, []);

//........... FIN DE LA PETICION A LA BASE DE DATOS TYPES ...........//


//........... INICIO DEL POST A BASE DE DATOS DEL POKEMON CARGADO ...........//

    const storePokemonDb = async () => {
        const URL = "http://localhost:3001/pokemonsdb/pokemons";
        
        try {
            const response = await axios.post(URL, dataToSend);
            console.log("Esto recibe response:", response);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }




//........... FIN DEL POST A BASE DE DATOS DEL POKEMON CARGADO ...........//

    const handleInputChange = (event) => {
        const { name, value, options } = event.target;
        if (name === 'tipo') { // Solo para el <select> de tipos
            const selectedOptions = [];
            let ban = false;
            for(let i=0; i<options.length; i++){
                if(options[i].selected){
                    for(let j=0; j<tipo.length; j++) {
                        if(tipo[j].value.includes(options[i].value)){
                            ban = true;
                        }
                    }
                    if(ban){
                        alert("Este tipo ya ha sido elegido, por favor elija otro");
                        continue;
                    }
                    if(tipo.length > 1){
                        alert("Solo puedes elegir dos tipos de elementos");
                        break;
                    } else{
                        const optionId = options[i].id;
                        const optionValue = options[i].value;
                        selectedOptions.push({id: optionId, value: optionValue});
                    }
                }
            }
            
            setTipo([...tipo, ...selectedOptions]);
        }
        else {
            setpokeStore(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }
        // }
        // setErrors(validate({ ...pokeStore, [name]: value })); //Con esta linea controlo los errores
    };

    const validateForm = () => {
        const newErrors = validate(pokeStore);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();
        
        if(isValid){
            storePokemonDb()
        }
    }

//........... FIN DE LOS EVENTOS ..............// 


    return (
        <div className={style.container}>
            <div className={style.formulario}>
                <h2 className={style.title}>Bienvenido, aquí podrás cargar tus propios pokemons</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.cardFLex}>
                        <div>
                            <div className={style.flexText}>
                                <span className={style.text}>Nombre</span> 
                                <input className={style.inputText} type="text" name='nombre' value={pokeStore.nombre}  onChange={handleInputChange}/>
                            </div>
                            {errors.nombre && <p>{errors.nombre}</p>}
                        </div>
                        <div>
                            <div className={style.flexText}>
                                <span className={style.text}>Imagen</span> 
                                {/* <label className={style.customFileInput}> Cargar archivo
                                    <input type="file" name='imagen' value={pokeStore.imagen} onChange={handleInputChange}/>
                                </label> */}
                                <input className={style.inputText} name='imagen' value={pokeStore.imagen} type="text"  onChange={handleInputChange}/>
                            </div>
                            {errors.imagen && <p>{errors.imagen}</p>}
                        </div>
                        <div>
                            <div className={style.flexText}>
                                <span className={style.text}>Vida</span> 
                                <input className={style.inputText} name='vida' value={pokeStore.vida} type="text"  onChange={handleInputChange}/>
                            </div>
                            {errors.vida && <p>{errors.vida}</p>}
                        </div>
                        <div>
                            <div className={style.flexText}>
                                <span className={style.text}>Ataque</span> 
                                <input className={style.inputText} name='ataque' value={pokeStore.ataque} type="text"  onChange={handleInputChange}/>
                            </div>
                            {errors.ataque && <p>{errors.ataque}</p>}
                        </div>
                        <div>
                            <div className={style.flexText}>
                                <span className={style.text}>Defensa</span> 
                                <input className={style.inputText} name='defensa' value={pokeStore.defensa} type="text"  onChange={handleInputChange}/>
                            </div>
                            {errors.defensa && <p>{errors.defensa}</p>}
                        </div>
                        <div>
                            <div className={style.flexText}>
                                <span className={style.text}>Velocidad</span> 
                                <input className={style.inputText} name='velocidad' value={pokeStore.velocidad} type="text"  onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={style.flexText}>
                            <span className={style.text}>altura</span> 
                            <input className={style.inputText} name='altura' value={pokeStore.altura} type="text"  onChange={handleInputChange}/>
                        </div>
                        <div className={style.flexText}>
                            <span className={style.text}>Peso</span> 
                            <input className={style.inputText} name='peso' value={pokeStore.peso} type="text"  onChange={handleInputChange}/>
                        </div>
                        <div className={style.flexText}>
                            <span className={style.text}>Tipo/s</span> 
                            <select className={style.inputText} name='tipo' value={tipo}  onChange={handleInputChange}  multiple>
                                {types && types.map(type => (
                                    <option key={type.id} id={type.id} value={type.name}> {/* PARA NO CONFUNDIRME PORTANTOS TYPE Y TYPES, ESTE TYPE ES UNA VARIABLE QUE SE CREA PARA EL MAP E IR RENDERIZANDO EL CONTENIDO DE TYPES EL CUAL CONTIENE LA INFORMACION OBTENIDA DE LA BASE DE DATOS */}
                                        {type.name}
                                        {/* {console.log("Esto es lo que viene en tipo: ", type)} */}
                                    </option>
                                ))}
                            </select>
                    </div>
                        </div>
                    <button className={style.buttomForm} type="submit" >Agregar</button>
                </form>
                
            </div>

{/** COMIENZO DE LA SEGUNDA VISTA DONDE APARECERAN LOS DATOS QUE SE VAN  CARGANDO  */}
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
        </div>
    )
}
export default Form;