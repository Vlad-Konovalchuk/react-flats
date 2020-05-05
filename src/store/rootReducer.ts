import { combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";
import { flatsReducer } from "../components/Flats/ducks";
import { IFlatsState } from "../components/Flats/ducks/types";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    flats: flatsReducer,
  });

export interface IRootState {
  router: RouterState;
  flats: IFlatsState;
}

export default rootReducer;
