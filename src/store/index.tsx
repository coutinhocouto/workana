import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '@/slice/name';
import lastNameReducer from '@/slice/lastName';

export default configureStore({
  reducer: {
    nameAction: nameReducer,
    lastNameAction: lastNameReducer,
  },
});