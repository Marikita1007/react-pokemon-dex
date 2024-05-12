import {combineReducers} from "redux";
import pokemonReducer from "./pokemonReducer";
import logReducer from "./logReducer";

export default combineReducers({
    pokemonReducer,
    logReducer
});