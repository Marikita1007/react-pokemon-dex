import {ADD_LOG, EMPTY_LOGS} from "../constants/actions";

export const addLog = payload => ({ type: ADD_LOG, payload })
export const emptyLogs = payload => ({ type: EMPTY_LOGS, payload})