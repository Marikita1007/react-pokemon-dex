import {useDispatch} from "react-redux";
import {addPokemonToTeam} from "../../actions/pokemon";
import {apiGetPokemonByName} from "../../apiFunction";

const BtnAddToTeam = ( { pokemonName } ) => {

    const dispatch = useDispatch();

    const handleAddToTeam = () => {
        apiGetPokemonByName( pokemonName )
            .then( apiPokemon => {
                dispatch(addPokemonToTeam({pokemon: apiPokemon}))
            } )
    }

    return (
        <button
            onClick={ handleAddToTeam }
        >
            Add to team
        </button>
    )
}

export default BtnAddToTeam;