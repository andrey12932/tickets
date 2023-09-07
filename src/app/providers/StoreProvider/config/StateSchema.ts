import {FlightsSchema} from "entities/Flights/model/types/flightsSchema";
import {CurrenciesSchema} from "entities/Currencies/model/types/currenciesSchema";

export interface StateSchema {
    flights: FlightsSchema;
    currencies: CurrenciesSchema
}
