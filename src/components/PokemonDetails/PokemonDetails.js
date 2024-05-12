//import './pokemonDetails.scss';
import BtnAddToTeam from "../BtnAddToTeam/BtnAddToTeam";
const PokemonDetails = ( {pokemon} ) => {
    return (
        <section id="pokemon_details">
            { pokemon && (
                <>
                    <h2>{ pokemon.name }</h2>
                    <BtnAddToTeam pokemonName={ pokemon.name } />
                    <img src={ pokemon.sprites.front_default } width="200" height="auto" />
                    <h3>Stats</h3>
                    { pokemon.stats.map( (item, i) => (
                        <p key={i}>{ item.stat.name }: { item.base_stat }</p>
                    ))}
                    <h3>Types</h3>
                    { pokemon.types.map( (item, i) => <p key={i}>{ item.type.name }</p> ) }
                    <h3>Capacités</h3>
                    { pokemon.abilities.map( (item, i) => <p key={i}>{ item.ability.name }</p> ) }
                </>
            ) }
        </section>
    )
}
export default PokemonDetails;