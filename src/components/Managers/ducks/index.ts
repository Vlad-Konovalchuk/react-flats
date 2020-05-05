import {Reducer} from "redux";
import {IManager, ManagersActionTypes, IMangersState} from "./types";
import {ManagersActions} from './actions'

export const initialState: IMangersState = {
    data: [],
    errors: undefined,
    loading: false
};

const reducer = (state = initialState, action: ManagersActions):IMangersState => {
    switch (action.type) {
        case ManagersActionTypes.FETCH_REQUEST: {
            return {...state, loading: true};
        }
        case ManagersActionTypes.FETCH_SUCCESS: {
            return {...state, loading: false, data: action.payload};
        }
        case ManagersActionTypes.FETCH_ERROR: {
            return {...state, loading: false, errors: action.error};
        }
        default: {
            return state;
        }
    }
};

export {reducer as flatsReducer};
