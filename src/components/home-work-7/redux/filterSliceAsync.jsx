import { createSlice } from "@reduxjs/toolkit";

const filterOptions = { all: "all", completed: "completed", pending: "pending" }
const defaultFilter = {status: filterOptions.all}

const filterSliceAsync = createSlice({
        name: "filterSliceAsync",
        initialState: defaultFilter,
        reducers:{setFilter: (state, action) => {state.status = action.payload.filter}}
})
export const { setFilter } = filterSliceAsync.actions;
const filterSliceAsyncReducer = filterSliceAsync.reducer;
export default filterSliceAsyncReducer