import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CourseI, CurrencyType, FlightsSchema, PossibleStopFilterValues} from "../types/flightsSchema";
import ticks from '../../../../../tickets.json';

const initialState: FlightsSchema = {
    tickets: [],
    currencies: {
        [CurrencyType.RUB]: 1,
        [CurrencyType.EUR]: 0.0095,
        [CurrencyType.USD]: 0.01
    },
    currentCurrency: CurrencyType.RUB,
    stopFilter: Object.values(PossibleStopFilterValues)
}


export const fetchCourse = createAsyncThunk('flights/currency', async (): Promise<CourseI> => {
        const currenciesResponse = await fetch('https://www.cbr-xml-daily.ru/latest.js')
        const currencies = await currenciesResponse.json();
        return currencies
    });


export const flightsSlice = createSlice({
    name: 'flights',
    initialState: initialState,
    reducers: {
        getAllTickets:  state => {
            state.tickets = ticks.tickets
        },
        changeCurrency: (state, action) => {
            state.currentCurrency = action.payload
        },
        addStopFilterValue: (state, action) => {
            const set = new Set<PossibleStopFilterValues>(state.stopFilter);
            if (state.stopFilter.length === Object.values(PossibleStopFilterValues).length - 2) {
                state.stopFilter = Object.values(PossibleStopFilterValues);
            } else {
                set.add(action.payload);
                state.stopFilter = Array.from(set)
            }
        },
        deleteStopFilter: (state, action) => {
            const set = new Set<PossibleStopFilterValues>(state.stopFilter);
            set.delete(action.payload);
            set.delete(PossibleStopFilterValues.ALL)
            state.stopFilter = Array.from(set)
        },
        setAllStopFilter: state => {
            state.stopFilter = Object.values(PossibleStopFilterValues);
        },
        showOnlyStopFilter: (state, action) => {
            state.stopFilter = [action.payload]
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

export const stopFilterValues: Record<number, PossibleStopFilterValues> = {
    0: PossibleStopFilterValues.NULL,
    1: PossibleStopFilterValues.ONE,
    2: PossibleStopFilterValues.TWO,
    3: PossibleStopFilterValues.THREE
}

export const { actions: flightsActions } = flightsSlice;

export const { reducer: flightsReducer } = flightsSlice;
