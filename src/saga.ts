import {all, spawn} from 'redux-saga/effects';
import testSaga from '@/Test/testSaga';

function* sagas() {
  yield all([spawn(testSaga)]);
}

export default sagas;
