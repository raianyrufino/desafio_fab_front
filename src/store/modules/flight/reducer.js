import produce from 'immer';
import { FlightTypes } from './actions';

const initialStatte = {
  flights: null,
  origin_location: null,
  destiny_location: null,
  date_hour: null,
  last_page: null,
  current_page: null,
  per_page: null,
  total: null
};

export default function flight(state = initialStatte, action) {
  return produce(state, draft => {
    switch (action.type) {
      case FlightTypes.ADD_FLIGHTS: {
        draft.flights = action.payload.flights;
        draft.last_page = action.payload.last_page;
        draft.current_page  = action.payload.current_page;
        draft.per_page = action.payload.per_page;
        draft.total = action.payload.total;
        break;
      }
      case FlightTypes.ADD_DATA_FLIGHT: {
        draft.origin_location = action.payload.origin_location;
        draft.destiny_location = action.payload.destiny_location;
        draft.date_hour  = action.payload.date_hour;
        break;
      }
      default:
    }
  });
}
