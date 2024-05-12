import {ADD_POKEMON_TO_TEAM, REMOVE_POKEMON_FROM_TEAM} from "../constants/actions";
import {addLog} from "../actions/log";
import {setMessage} from "../actions/pokemon";
import emptyLogs from "../components/EmptyLogs/EmptyLogs";


const logMiddleware = store => next => action => {

    const { team } = store.getState().pokemonReducer;
    const dispatch = store.dispatch;

    if( action.type === ADD_POKEMON_TO_TEAM )
    {
        const { name } = action.payload.pokemon;

        if( team.length >= 6 )
        {
            dispatch( addLog( { msg: `Team is full. Fail to add ${ name } - ${ Date() }` } ) )
            dispatch( setMessage({ msg: `Team is full, can't add ${ name } to team.`  }) )
            return;
        }
        dispatch( addLog( { msg: `${ name } ajouté - ${ Date() }` } ) )
    }

    if( action.type === REMOVE_POKEMON_FROM_TEAM )
    {
        const { name } = action.payload.pokemonToRemove;
        dispatch( addLog( { msg: `${ name } removed from team - ${ Date() }` } ) )
        dispatch( setMessage({ msg: `${ name } remove from team successfully.`  }) )
    }

    return next(action);
}
export default logMiddleware;