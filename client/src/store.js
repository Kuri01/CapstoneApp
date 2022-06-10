import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import departuresReducer from './features/departuresSlice';
import selectedDepartureSliceReducer from './features/selectedDepartureSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    departures: departuresReducer,
    selected: selectedDepartureSliceReducer,
  },
});
