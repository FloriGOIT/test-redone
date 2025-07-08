import { createSlice } from '@reduxjs/toolkit';

const contactsLocal = localStorage.getItem('reduxContacts');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(contactsLocal) || [],
  reducers: {

    addNewContact: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('reduxContacts', JSON.stringify(state));
    },
    deleteContact: (state, action) => {
      const newState = state.filter(s => s.id !== action.payload);
      localStorage.setItem('reduxContacts', JSON.stringify(newState));
      return newState;
    },
    editContact: (state, action) => {
      let updatedTask = state.find(s => s.id === action.payload.id);
      if (updatedTask) {
        updatedTask.name = action.payload.name;
        updatedTask.number = action.payload.number;
        updatedTask.numberRE = action.payload.number.match(/\d+/g).join('');
      }
      localStorage.setItem('reduxContacts', JSON.stringify(state));
    },
  },
}); 

export const {addNewContact, deleteContact, editContact } =
  contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
