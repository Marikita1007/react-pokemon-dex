import {
    ADD_POKEMON_TO_TEAM,
    REMOVE_POKEMON_FROM_TEAM,
    SET_MESSAGE,
    SET_POKEMON_DETAILS_TO_DISPLAY,
    SET_POKEMONS,
} from "../constants/actions";

const initialState = {
    pokemons: [],
    team: [],
    message: '',
    pokemonDetailsToDisplay: null
};

const pokemonReducer = ( state = initialState, action) => {
    switch ( action.type )
    {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload.pokemons,// ペイロードからポケモンデータを取得し、状態を更新する
            };
        case ADD_POKEMON_TO_TEAM:
            return {
                ...state,
                team: state.team.concat( action.payload.pokemon ),
                message: ''
            }
        case REMOVE_POKEMON_FROM_TEAM:
            return {
                ...state,
                team: state.team.filter( pokemon => pokemon !== action.payload.pokemonToRemove ),
                message: ''
            }
        case SET_POKEMON_DETAILS_TO_DISPLAY:
            return {
                ...state,
                pokemonDetailsToDisplay: action.payload.pokemonToDisplay
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload.msg
            }
        default:
            return state;
    }
};

export default pokemonReducer;
