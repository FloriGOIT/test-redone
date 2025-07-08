import { tasksSliceReducer } from "./tasksSlices";
import { filterSliceReducer } from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
        reducer: {
                tasks: tasksSliceReducer,
                filter: filterSliceReducer
        }
})
export default store