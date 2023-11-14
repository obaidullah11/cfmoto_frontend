import { all } from 'redux-saga/effects';
import { userWatcher } from './user';
function* rootSaga() {
  yield all([userWatcher()]);
}

export { rootSaga };