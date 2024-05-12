import './pokedexItem.scss'
import BtnDetails from "../BtnDetails/BtnDetails";
import BtnAddToTeam from "../BtnAddToTeam/BtnAddToTeam";
const PokedexItem = ( {pokemon} ) => {
    return (
        <div className="pokedex-item">
            <div className="pokemon-name">{pokemon.name}</div>
            <BtnDetails pokemonName={pokemon.name} />
            <BtnAddToTeam pokemonName={pokemon.name} />
        </div>
    )
}

export default PokedexItem;