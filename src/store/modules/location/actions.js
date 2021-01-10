export const LocationTypes = {
    LOCATIONS_REQUEST: '@locations/LOCATIONS_REQUEST',
    ADD_LOCATIONS: '@locations/ADD_LOCATIONS',
    CREATE_LOCATION: '@locations/CREATE_LOCATION'
};
  
export function RequestLocations() {
    return {
      type: LocationTypes.LOCATIONS_REQUEST,
      payload: {},
    };
}
  
export function CreateLocation(zip_code, country, city, state){
    return {
      type: LocationTypes.CREATE_LOCATION,
      payload: { zip_code, country, city, state },
    }
}
  
export function AddLocations(locations) {
    return {
      type: LocationTypes.ADD_LOCATIONS,
      payload: { locations },
    };
}

  
