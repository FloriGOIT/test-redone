import { createSlice } from '@reduxjs/toolkit';
let arr = localStorage.getItem('arrTasks');
const tasksInitialState = JSON.parse(arr) || [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('arrTasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.editing = !task.editing;
      }
      if (task) {
        task.text = action.payload.newText;
      }
      localStorage.setItem('arrTasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('arrTasks', JSON.stringify(newState));
      return newState;
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem('arrTasks', JSON.stringify(state));
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;
export const tasksSliceReducer = tasksSlice.reducer;

//addTask, deleteTask, toggleTask
