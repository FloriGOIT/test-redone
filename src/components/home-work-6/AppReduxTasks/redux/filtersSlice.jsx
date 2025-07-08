import { createSlice } from "@reduxjs/toolkit"

const typesOfTasks = {
        all: "all",
        completed: "completed",
        active:"active"
}


const filterSlice = createSlice({
        name: "filterDone",
        initialState: typesOfTasks.all,
        reducers: {
                filteringTask: (state, action) => { return action.payload }
                //biblioteca immer nu poate functiona pe state de tip primitiv si astfel nu pot folosi NU state= action.payload ; 
                // trebuie sa creez state-ul ca obiect sa pot folosi immer  DA state.status=action.payload
        }
})

export const { filteringTask } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer
