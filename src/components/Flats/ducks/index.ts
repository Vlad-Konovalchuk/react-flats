import { Reducer } from "redux";
import { FlatsActionTypes, IFlatsState } from "./types";

export const initialState: IFlatsState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<IFlatsState> = (state = initialState, action) => {
  switch (action.type) {
    case FlatsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case FlatsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case FlatsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as flatsReducer };
