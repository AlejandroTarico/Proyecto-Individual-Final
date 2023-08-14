import { useEffect, useState } from 'react';
import style from './Form.module.css'
import axios from 'axios';
import validate from './validation'
import { connect } from "react-redux";
import { typesPokemons } from "../../redux/actions"; 
import Previsualization from './Previsulization';


const Form = ({types, typesPokemons}) => {

    useEffect(() => {
        typesPokemons(); // Llamo al para obtener los tipos de pokemons.
    }, [typesPokemons]);

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

//........... INICIO DEL POST A BASE DE DATOS DEL POKEMON CARGADO ...........//

    const storePokemonDb = async () => {
        const URL = "http://localhost:3001/pokemonsdb/pokemons";
        
        try {
            await axios.post(URL, dataToSend);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }

//........... FIN DEL POST A BASE DE DATOS DEL POKEMON CARGADO ...........//

//........... INICIO DE LA FUNCION QUE VA A REGISTRAR CADA EVENTO DEL FORMULARIO ..........//
    const handleInputChange = (event) => {
        const { name, value, options } = event.target;

        let updatedErrors = { ...errors }; // cargo en esta variable el objeto errors 

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

            updatedErrors[name] = validate({ ...pokeStore, [name]: value })[name]; // actualizo el objeto con el error referente a ese input
        }
        // setErrors(validate({ ...pokeStore, [name]: value })); //Con esta linea controlo los errores
        setErrors(updatedErrors);
    };
//........... FIN DE LA FUNCION QUE REGISTRA CADA EVENTO DEL FORMULARIO ..........//


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
                                    </option>
                                ))}
                            </select>
                    </div>
                        </div>
                    <button className={style.buttomForm} type="submit" >Agregar</button>
                </form>               
            </div>
            <Previsualization pokeStore= {pokeStore} tipo= {tipo}/> {/** iNVOCO LA SEGUNDA VISTA DONDE APARECERAN LOS DATOS QUE SE VAN CARGANDO  */}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      types: state.types // Mapea el estado de los pokémons desde el store al componente.
    };
  };
  
  const mapDispatchToProps = {
    typesPokemons // Mapea la acción para obtener los pokémons al componente.
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Form);
