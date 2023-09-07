import { createSlice} from "@reduxjs/toolkit";
import { FlightsSchema, PossibleStopFilterValues} from "../types/flightsSchema";
import ticks from '../../../../../tickets.json';

const initialState: FlightsSchema = {
    tickets: [],
    stopFilter: Object.values(PossibleStopFilterValues)
}

export const flightsSlice = createSlice({
    name: 'flights',
    initialState: initialState,
    reducers: {
        getAllTickets:  state => {
            state.tickets = ticks.tickets
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
