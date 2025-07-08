import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiReduxAsync = axios.create({
  baseURL: 'https://62584f320c918296a49543e7.mockapi.io',
});

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (__, thunkAPI) => {
    try {
      const response = await apiReduxAsync.get('/tasks');
      console.log('response.data', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
            const response = await apiReduxAsync.post('/tasks', { text });
            console.log("add task",response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleTask = createAsyncThunk(
  'tasks/toggleTask',

  async (task, thunkAPI) => {
    try {
      const response = await apiReduxAsync.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (task, thunkAPI) => {
    try {
      const response = await apiReduxAsync.delete(`/tasks/${task.id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
