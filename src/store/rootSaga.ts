import { all, fork } from "redux-saga/effects";
import { flatsSaga } from "../components/Flats/ducks/saga";

// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
  yield all([fork(flatsSaga)]);
}
