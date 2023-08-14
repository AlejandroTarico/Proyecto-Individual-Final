import axios from "axios";

export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS";
export const FETCH_IDTYPE_SUCCESS = "FETCH_IDTYPE_SUCCESS";
export const FETCH_SORT_SUCCESS = "FETCH_SORT_SUCCESS";
export const FETCH_ATTACK_SUCCESS = "FETCH_ATTACK_SUCCESS";
export const FETCH_NAMEDA_SUCCESS = "FETCH_NAMEDA_SUCCESS";
export const FETCH_SEARCHDBAPI_SUCCESS = "FETCH_SEARCHDBAPI_SUCCESS";

export const fetchPokemonsSuccess = (pokemons) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons
  };
};
export const fetchTiposSuccess = (types) => {
    return {
      type: FETCH_TYPES_SUCCESS,
      payload: types
    };
};
export const filterByTypes = (idType) => {
    return {
        type: FETCH_IDTYPE_SUCCESS,
        payload: idType
    };
};
export const filterBySort = (idType) => {
    return {
        type: FETCH_SORT_SUCCESS,
        payload: idType
    };
};
export const filterByAttack = (attack) => {
    return {
        type: FETCH_ATTACK_SUCCESS,
        payload: attack
    };
};
export const filterByDatabApi = (nameDbApi) => {
    return {
        type: FETCH_NAMEDA_SUCCESS,
        payload: nameDbApi
    }
};
export const searchByDataBaseApi = (dataBApi) => {
    return {
        type: FETCH_SEARCHDBAPI_SUCCESS,
        payload: fetchNameDbApi(dataBApi)
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

export const fetchNameDbApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios("http://localhost:3001/pokemon");
            console.log("ESTO ES LO QUE TRABE DATABASE Y API: ", data);
            dispatch(fetchTiposSuccess(data));
            
        } catch (error) {
            console.error("No se pudo obtener los tipos", error);
        }
    }
};