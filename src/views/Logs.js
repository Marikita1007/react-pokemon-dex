import {useSelector} from "react-redux";
import EmptyLogs from "../components/EmptyLogs/EmptyLogs";

const Logs = () => {

    const { logs, emptyLogs } = useSelector(store => store.logReducer );

    return (
        <>
            <h1>LOGS</h1>
            { logs.length === 0 && <p>No log saved</p> }
            { logs.length > 0 && logs.map( (log, i) => <p key={i}>{ log }</p>) }
            <EmptyLogs emptyLogs={emptyLogs} />
        </>
    )
}

export default Logs;