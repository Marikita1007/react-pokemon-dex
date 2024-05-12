import {removePokemonFromTeam} from "../../actions/pokemon";
import {useDispatch} from "react-redux";

const BtnRemoveFromTeam = ( {pokemonToRemove} ) => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={ () => dispatch( removePokemonFromTeam({ pokemonToRemove }) ) }
        >
            Remove from team
        </button>
    )
}

export default BtnRemoveFromTeam;