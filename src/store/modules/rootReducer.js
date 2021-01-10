import { combineReducers } from 'redux';

import flight from './flight/reducer';
import location from './location/reducer';
import toast from './toast/reducer';

export default combineReducers({
  flight,
  location,
  toast,
});
