

import { 
    FETCH_POKEMONS_SUCCESS,
    FETCH_TYPES_SUCCESS
} from "./actions";

const initialState = {
  pokemons: [],
  types: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS:
        return {
            ...state,
            pokemons: action.payload
        };
    case FETCH_TYPES_SUCCESS:
        return {
            ...state,
            types: action.payload
        };
    default:
      return state;
  }
};

export default rootReducer;