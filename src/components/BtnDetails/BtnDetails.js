import {useContext} from "react";
import PokemonContext from "../../data/PokemonContext";
import {useDispatch} from "react-redux";
import {setPoemonToDisplay} from "../../actions/actions.types";

const BtnPokemonDetails = ({pokemonToDisplay}) => {

    const dispatch = useDispatch();

    const handleDetails = () => {
        dispatch(setPoemonToDisplay( { pokemonToDisplay }))
        fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonToDisplay }`)
            .then( response => response.json() )
            .then( APIPokemon => {
                dispatch(setPoemonToDisplay({ pokemonToDisplay }))
            })
    }

    return (
        <>
            <button
                className="btn-details"
                onClick={ handleDetails }
            >
                Details
            </button>
        </>
    )

}

export default BtnPokemonDetails;