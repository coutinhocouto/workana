import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'nameAction',
  initialState: {
    before: '',
    element: 'Br',
    after: 'eaking',
  },
  reducers: {
    createName: (state, action) => {
      const element = {
        before: action.payload.before,
        element: action.payload.element,
        after: action.payload.after,
      }

      return element;
    }
  },
});

export const { createName } = nameSlice.actions;
export default nameSlice.reducer;