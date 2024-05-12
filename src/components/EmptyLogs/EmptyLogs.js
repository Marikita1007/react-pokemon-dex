import {useDispatch} from "react-redux";
import {emptyLogs} from "../../actions/log";

const EmptyLogs = () => {

    console.log("emptylog : " + {emptyLogs});
    const dispatch = useDispatch();

    const handleRemoveLogs = () => {
        dispatch(emptyLogs());
    };

    return (
        <button onClick={handleRemoveLogs}>
            Remove logs
        </button>
    )
}

export default EmptyLogs;