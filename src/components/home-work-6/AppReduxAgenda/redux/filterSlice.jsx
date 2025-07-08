import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
        name: "filterContacts",
        initialState: "",
        reducers: {
                filteringContacts: (state, action) => action.payload
        }


})

export const { filteringContacts } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer

