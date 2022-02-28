import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { mapSaga } from './map';

export default function* rootSaga() {
  yield all([authSaga(), mapSaga()]);
}
