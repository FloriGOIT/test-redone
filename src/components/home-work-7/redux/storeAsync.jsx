import { configureStore } from "@reduxjs/toolkit";
import taskSliceAsyncReducer from "./taskSliceAsync"
import filterSliceAsyncReducer from "./filterSliceAsync";

const storeAsync = configureStore({
        reducer: {
                tasksAsync: taskSliceAsyncReducer,
                filterAsync: filterSliceAsyncReducer
        }
})

export default storeAsync


