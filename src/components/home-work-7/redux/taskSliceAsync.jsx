import { createSlice } from '@reduxjs/toolkit';
import {fetchTasks, addTask, toggleTask, deleteTask} from "./operationsAsync"
const initialValue = {
  items: [],
  isPending: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasksAsync',
  initialState: initialValue,
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.isPending = true;
    })
          .addCase(fetchTasks.fulfilled, (state, action) => {
                  state.isPending = false;
                  state.error = null;
                  state.items=action.payload
          })
            .addCase(fetchTasks.rejected, (state, action) => {
                    state.isPending = false;
                    state.error=action.payload
            })
      .addCase(addTask.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = null;
        state.items.push(action.payload)
        
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isPending = false;
        state.error=action.payload
      })
      .addCase(toggleTask.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = null;
        const task = state.items.findIndex(item => item.id === action.payload.id)
        state.items.splice(task, 1,action.payload);
      })
      .addCase(toggleTask.rejected, (state, action) => {
        state.isPending = false;
        state.error=action.payload
      })
      .addCase(deleteTask.pending, (state, action) => {
      state.isPending=true
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = null;
        const task = state.items.findIndex(task => task.id === action.payload.id)
        state.items.splice(task,1)
    })
  }

});

const taskSliceAsyncReducer = taskSlice.reducer
export default taskSliceAsyncReducer