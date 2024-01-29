import { createSlice } from '@reduxjs/toolkit';

export const lastNameSlice = createSlice({
  name: 'lastNameAction',
  initialState: {
    before: '',
    element: 'Ba',
    after: 'd',
  },
  reducers: {
    createLastName: (state, action) => {
      const element = {
        before: action.payload.before,
        element: action.payload.element,
        after: action.payload.after,
      }

      return element;
    }
  },
});

export const { createLastName } = lastNameSlice.actions;
export default lastNameSlice.reducer;