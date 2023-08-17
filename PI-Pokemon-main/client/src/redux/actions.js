import axios from "axios";

export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS";
export const FETCH_IDTYPE_SUCCESS = "FETCH_IDTYPE_SUCCESS";
export const FETCH_SORT_SUCCESS = "FETCH_SORT_SUCCESS";
export const FETCH_ATTACK_SUCCESS = "FETCH_ATTACK_SUCCESS";
export const FETCH_SEARCHID_SUCCESS = "FETCH_SEARCHID_SUCCESS";
export const FETCH_NAMEDA_SUCCESS = "FETCH_NAMEDA_SUCCESS";
export const FETCH_SEARCHDBAPI_SUCCESS = "FETCH_SEARCHDBAPI_SUCCESS";

export const fetchPokemonsSuccess = (pokemons) => { // Acción creada para realizar la carga de los objetos y cargarlos al estado global
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons
  };
};
export const fetchTiposSuccess = (types) => { // Con esta acción estoy obteniendo los tipos de pokemon para cargarlos al estado global
    return {
      type: FETCH_TYPES_SUCCESS,
      payload: types
    };
};
export const filterByTypes = (idType) => { // Acción para realizar un filtro por typo de pokemon
    return {
        type: FETCH_IDTYPE_SUCCESS,
        payload: idType
    };
};
export const filterBySort = (idType) => { // Acción para realizar un ordenamiento alfabeticamente
    return {
        type: FETCH_SORT_SUCCESS,
        payload: idType
    };
};
export const filterByAttack = (attack) => { // Acción para realizar un ordenamiento por poder de ataque
    return {
        type: FETCH_ATTACK_SUCCESS,
        payload: attack
    };
};
export const filterByDatabApi = (nameDbApi) => { // Esta action es para realizar el filtro a dependiendo de si es por api o base de datos 
    return {
        type: FETCH_NAMEDA_SUCCESS,
        payload: nameDbApi
    }
};
export const searchByDataBaseApi = (dataBApi) => { // Creo que esta función action es para la busqueda por nombre tanto en la api como en la base de datos
    return {
        type: FETCH_SEARCHDBAPI_SUCCESS,
        payload: dataBApi
    };
};
export const searchPokemonsId = (pokeID) => { // Esta acción está enviando el id de la card que se selecciono para poder obtener todos los detalles 
    console.log("ACTIONS: ", pokeID);
    return {
        type: FETCH_SEARCHID_SUCCESS,
        payload: pokeID
    };
};



export const fetchPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios("http://localhost:3001/pokemonsapi/pokemons");
            dispatch(fetchPokemonsSuccess(data));
        } catch (error) {
            console.error("No se pudo obtener la información de los pokemons:", error);
        }
    };
};

export const typesPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios("http://localhost:3001/pokemonsdb/types");
            dispatch(fetchTiposSuccess(data));
            
        } catch (error) {
            console.error("No se pudo obtener los tipos", error);
        }
    }
};

export const SearchNameDbApi = (nameDbApi) => {
    return async (dispatch) => {
        try {
            const URL = "http://localhost:3001/pokemon";
            const {data} = await axios(URL + `?name=${nameDbApi}`);
            dispatch(searchByDataBaseApi(data));
            
        } catch (error) {
            console.error("No se pudo obtener los pokemons buscados por su nombre", error);
        }
    }
};