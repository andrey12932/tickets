import {createSelector} from "@reduxjs/toolkit";
import {getFlights} from "entities/Flights/model/selectors/getFlights/getFlights";
import {FlightsSchema} from "entities/Flights";

export const getCurrencies = createSelector(
    getFlights,
    (fligths: FlightsSchema) => fligths.currencies
)

export const getCurrentCurrency = createSelector(
    getFlights,
    (fligths: FlightsSchema) => fligths.currentCurrency
)
