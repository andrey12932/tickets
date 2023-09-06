import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {flightsReducer} from "entities/Flights";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            flights: flightsReducer
        },
        preloadedState: initialState,
    })
}
