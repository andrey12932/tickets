import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CourseI, CurrencyType, CurrenciesSchema} from "../types/currenciesSchema";

const initialState: CurrenciesSchema = {
    currencies: {
        [CurrencyType.RUB]: 1,
        [CurrencyType.EUR]: 0.0095,
        [CurrencyType.USD]: 0.01
    },
    currentCurrency: CurrencyType.RUB,
}


export const fetchCourse = createAsyncThunk('flights/currency', async (): Promise<CourseI> => {
        const currenciesResponse = await fetch('https://www.cbr-xml-daily.ru/latest.js')
        const currencies = await currenciesResponse.json();
        return currencies
    });


export const currenciesSlice = createSlice({
    name: 'flights',
    initialState: initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.currentCurrency = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourse.fulfilled, (state, action) => {
            const currencyList = Object.keys(CurrencyType) as CurrencyType[]
            currencyList.forEach(key => {
                state.currencies[key] = action.payload.rates[key];
            });
            state.currencies[CurrencyType.RUB] = 1
        })
    }
})

export const { actions: currenciesActions } = currenciesSlice;

export const { reducer: currenciesReducer } = currenciesSlice;
