//import './team.scss'
import BtnDetails from "../BtnDetails/BtnDetails";
import {useSelector} from "react-redux";
import BtnRemoveFromTeam from "../BtnRemoveFromTeam/BtnRemoveFromTeam";
const PokemonsTeam = () => {

    const { team } = useSelector(store => store.pokemonReducer)

    return (
        <section>
            { team.length === 0 && <p>Team is empty.</p> }
            { team.length > 0 && team.map( (pokemon, i) => (
                <article key={i}>
                    <img src={ pokemon.sprites.front_default } />
                    <div>
                        <span>{ pokemon.name }</span>
                        <BtnDetails pokemonName={pokemon.name} />
                        <BtnRemoveFromTeam pokemonToRemove={pokemon} />
                    </div>
                </article>
            ))}
        </section>
    )
}
export default PokemonsTeam;