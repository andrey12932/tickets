import {createSelector} from "@reduxjs/toolkit";
import {getFlights} from "entities/Flights/model/selectors/getFlights/getFlights";
import {FlightsSchema} from "entities/Flights";
import {getStopFilter} from "entities/Flights/model/selectors/getStopFilter/getStopFilter";
import {stopFilterValues} from "entities/Flights/model/slice/FlightsSlice";

export const getFlightsTickets = createSelector(
    getFlights,
    getStopFilter,
    (fligths: FlightsSchema, stopFilter) =>
        fligths.tickets.filter(value => stopFilter.includes(stopFilterValues[value.stops])
        )
)
