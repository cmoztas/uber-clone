import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.action = action.payload
        },
        setDestination: (state, action) => {
            state.action = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.action = action.payload
        }
    }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const selectOrigin = state => state.nav.origin;
export const selectDestionation = state => state.nav.destination;
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation;

export default navSlice.reducer;