import {useDispatch} from "react-redux";

const RemoveLogs = ( { removeLogs } ) => {

    const dispatch = useDispatch;

    return (
        <button
            onClick={() => dispatch( removeLogs({ removeLogs }) ) }
        >
            Remove logs
        </button>
    )
}

export default RemoveLogs;