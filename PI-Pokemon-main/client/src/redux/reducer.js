

import { 
    FETCH_POKEMONS_SUCCESS,
    FETCH_TYPES_SUCCESS,
    FETCH_IDTYPE_SUCCESS,
    FETCH_SORT_SUCCESS,
    FETCH_ATTACK_SUCCESS
} from "./actions";

const initialState = {
  pokemons: [],
  pokeRespaldo: [],
  pokeFilter: [],
  types: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS:
        return {
            ...state,
            pokemons: action.payload,
            pokeRespaldo: action.payload
        };
    case FETCH_TYPES_SUCCESS:
        return {
            ...state,
            types: action.payload
        };
    case FETCH_IDTYPE_SUCCESS:
        console.log("ESTO LLEGA A REDUCER POR ACTION PAYLOAD: ", action.payload);
        const allpokemons = state.pokeRespaldo;
        const typesFilter = action.payload === 'allTypes' ? allpokemons : allpokemons.filter((poke) => {
            for(let i = 0; i < poke.tipo.length; i++){
                if(poke.tipo[i].tipo === action.payload) {
                    console.log("PARA EL CASO DEL NAME DENTRO DEL IF ES: ", poke.tipo[i].tipo);
                    return true;
                }
            }
            return false;
        });
        return {
            ...state, 
            pokemons: typesFilter
        };
        case FETCH_SORT_SUCCESS:
            const pokeSort = [...state.pokemons].sort((a, b) => {
                if (action.payload === "ascendente") {
                  return a.nombre.localeCompare(b.nombre);
                } else if (action.payload === "descendente") {
                  return b.nombre.localeCompare(a.nombre);
                }
                return 0;
            });
            return {
            ...state,
            pokemons: pokeSort
            };
        case FETCH_ATTACK_SUCCESS:
            const PokeAttack = [...state.pokemons].sort((a, b) => {
                const ataqueA = a.ataque;
                const ataqueB = b.ataque;
        
                if (action.payload === "debil") {
                  return ataqueA - ataqueB;
                } else if (action.payload === "fuerte") {
                  return ataqueB - ataqueA;
                }
                return 0;
            });
        
            return {
                ...state,
                pokemons: PokeAttack
            };
    default:
      return state;
  }
};

export default rootReducer;