import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

export const getStopFilter = (state: StateSchema) => state.flights.stopFilter;