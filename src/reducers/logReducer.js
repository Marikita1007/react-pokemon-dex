import {ADD_LOG, EMPTY_LOGS} from "../constants/actions";

const initialState = {
    logs: []
}

const logReducer = ( state = initialState, action ) => {
    switch(action.type)
    {
        case ADD_LOG:
            return{
                ...state,
                logs: state.logs.concat( action.payload.msg )
            }
        case EMPTY_LOGS:
            return {
                ...state,
                logs: []
            }
        default:
            return state;
    }
}

export default logReducer;