export const FlightTypes = {
  FLIGHTS_REQUEST: '@flights/FLIGHTS_REQUEST',
  ADD_FLIGHTS: '@flights/ADD_FLIGHTS',
  CREATE_FLIGHT: '@flights/CREATE_FLIGHT',
  ADD_DATA_FLIGHT: '@flights/ADD_DATA_FLIGHT',
  UPDATE_FLIGHT: '@flights/UPDATE_FLIGHT',
};

export function RequestFlights(page) {
  return {
    type: FlightTypes.FLIGHTS_REQUEST,
    payload: {page},
  };
}

export function CreateFlight(origin_id, destiny_id, date_hour){
  return {
    type: FlightTypes.CREATE_FLIGHT,
    payload: { origin_id, destiny_id, date_hour },
  }
}

export function AddFlights(flights, last_page, current_page, per_page, total) {
  return {
    type: FlightTypes.ADD_FLIGHTS,
    payload: { flights, last_page, current_page, per_page, total },
  };
}

export function AddDataFlight(origin_location, destiny_location, date_hour) {
  return {
    type: FlightTypes.ADD_DATA_FLIGHT,
    payload: { origin_location, destiny_location, date_hour },
  };
}

export function UpdateFlight(id, origin_id, destiny_id, date_hour) {
  return {
    type: FlightTypes.UPDATE_FLIGHT,
    payload: { id, origin_id, destiny_id, date_hour },
  };
}