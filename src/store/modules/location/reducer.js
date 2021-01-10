import produce from 'immer';
import { LocationTypes } from './actions';

const initialStatte = {
  locations: null,
};

export default function location(state = initialStatte, action) {
  return produce(state, draft => {
    switch (action.type) {
      case LocationTypes.ADD_LOCATIONS: {
        draft.locations = action.payload.locations;
        break;
      }
      default:
    }
  });
}
