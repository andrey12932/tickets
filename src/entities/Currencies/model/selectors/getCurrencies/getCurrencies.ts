import {createSelector} from "@reduxjs/toolkit";
import {CurrenciesSchema} from "entities/Currencies/model/types/currenciesSchema";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";


export const getCurrencies = createSelector(
    (state: StateSchema) => state.currencies,
    (currencies: CurrenciesSchema) => currencies.currencies
);

export const getCurrentCurrency = createSelector(
    (state: StateSchema) => state.currencies,
    (currencies: CurrenciesSchema) => currencies.currentCurrency
)
