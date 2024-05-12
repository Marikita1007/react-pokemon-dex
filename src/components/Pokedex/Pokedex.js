import PokedexItem from "../PokedexItem/PokedexItem";
import './pokedex.scss'
import {useSelector} from "react-redux";
const Pokedex = () => {

    const { pokemons } = useSelector( store => store.pokemonReducer );

    return (
        <section id="pokedex">
            <div className="pokemon-list">
                { pokemons.length > 0 && pokemons.map( (pokemon, i) => (
                    <PokedexItem key={i} pokemon={pokemon}/>
                ))}
            </div>
        </section>
    )
}
export default Pokedex;