

import { 
    FETCH_POKEMONS_SUCCESS,
    FETCH_TYPES_SUCCESS,
    FETCH_IDTYPE_SUCCESS,
    FETCH_SORT_SUCCESS,
    FETCH_ATTACK_SUCCESS,
    FETCH_SEARCHID_SUCCESS,
    FETCH_NAMEDA_SUCCESS,
    FETCH_SEARCHDBAPI_SUCCESS
} from "./actions";

const initialState = {
    pokemons: [],
    pokeRespaldo: [],
    types: [],
    pokeId: [],
    pokeDbApi: [],
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
            const allpokemons = state.pokeRespaldo;
            const typesFilter = action.payload === 'allTypes' ? allpokemons : allpokemons.filter((poke) => {
                for(let i = 0; i < poke.tipo.length; i++){
                    if(poke.tipo[i].tipo === action.payload) {
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
        case FETCH_SEARCHID_SUCCESS:
            console.log("REDUCERS: ", action.payload);
            const pokeFinded = state.pokemons.filter((poke) => poke.id === Number(action.payload) || poke.id === action.payload);
            console.log("REDUCERS despues del filtro: ", pokeFinded, state.pokemons);
            return {
                ...state,
                pokeId: pokeFinded[0]
            }
        case FETCH_SEARCHDBAPI_SUCCESS:
            return {
                ...state,
                pokemons: action.payload,
                pokeDbApi: action.payload
            }
        case FETCH_NAMEDA_SUCCESS:
            const bydataOrApi = state.pokeDbApi.filter((poke) => {
                if(typeof(poke.id) === 'number' && action.payload === 'api') {
                    return true;
                }
                else if(typeof(poke.id) === 'string' && action.payload === 'database') {
                    return true;
                }
                else return 0;
            });
            return {
                ...state,
                pokemons: bydataOrApi
            }
    default:
      return state;
  }
};

export default rootReducer;