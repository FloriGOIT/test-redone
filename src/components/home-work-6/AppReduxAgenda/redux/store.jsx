import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { filterSliceReducer } from "./filterSlice";

const storeAgenda = configureStore({
        reducer: {
                agendaRedux: contactsSliceReducer,
                filterAgendaRedux: filterSliceReducer
        }
})

export default storeAgenda