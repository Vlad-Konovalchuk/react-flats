// ./src/store/heroes/sagas.ts

import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { FlatsActionTypes } from "./types";
import { fetchError, fetchSuccess } from "./actions";
import { FlatsService } from "../../../services/flatService";

function* handleFetch() {
  try {
    const res = yield call(FlatsService.getAll);

    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(FlatsActionTypes.FETCH_REQUEST, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* flatsSaga() {
  yield all([fork(watchFetchRequest)]);
}
