import axios from "axios";

export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS";

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