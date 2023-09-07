import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {flightsReducer} from "entities/Flights";
import {currenciesReducer} from "entities/Currencies";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            flights: flightsReducer,
            currencies: currenciesReducer
        },
        preloadedState: initialState,
    })
}
