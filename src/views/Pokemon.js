import PokemonDetails from "../components/PokemonDetails/PokemonDetails";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {setPokemonDetailsToDisplay} from "../actions/pokemon";
import {apiGetPokemonByName} from "../apiFunction";

const Pokemon = () => {
    const { name } = useParams();
    const { pokemonDetailsToDisplay } = useSelector( store => store.pokemonReducer);
    const dispatch = useDispatch();

    useEffect( () => {
        apiGetPokemonByName( name )
            .then( APIPokemon => {
                dispatch( setPokemonDetailsToDisplay( {
                    pokemonToDisplay: APIPokemon
                }))
            })
    }, [name])

    return (
        <>
            { !pokemonDetailsToDisplay && <p>Pokemon doesn't exists.</p> }
            { pokemonDetailsToDisplay && <PokemonDetails pokemon={pokemonDetailsToDisplay} /> }
        </>
    )

}

export default Pokemon;