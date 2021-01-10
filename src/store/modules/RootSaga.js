import { all } from 'redux-saga/effects';

import flight from './flight/sagas';
import location from './location/sagas';

export default function* rootSaga() {
  return yield all([flight, location]);
}
