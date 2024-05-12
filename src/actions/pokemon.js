import {
    ADD_POKEMON_TO_TEAM,
    REMOVE_POKEMON_FROM_TEAM,
    SET_POKEMON_DETAILS_TO_DISPLAY,
    SET_POKEMONS,
    SET_MESSAGE
} from "../constants/actions";

export const setPokemons = payload => ({ type: SET_POKEMONS, payload });
export const addPokemonToTeam = payload => ({type: ADD_POKEMON_TO_TEAM, payload });
export const removePokemonFromTeam = payload => ({type: REMOVE_POKEMON_FROM_TEAM, payload});
export const setPokemonDetailsToDisplay = payload => ({ type: SET_POKEMON_DETAILS_TO_DISPLAY, payload });
export const setMessage = payload => ({type: SET_MESSAGE, payload});


// export const setPokemonDetailsToDisplay = ( payload ) => {
//     return {
//         type: SET_POKEMON_DETAILS_TO_DISPLAY,
//         payload
//     }
// }