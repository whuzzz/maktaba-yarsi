import { createSlice } from '@reduxjs/toolkit';

interface SearchSliceState {
  showModal: boolean;
}

const initialState = {
  showModal: false,
} as SearchSliceState;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    openModal: (state) => {
      const appRoot = document.getElementById('__app') as HTMLDivElement;
      appRoot.classList.add('blur-sm');

      state.showModal = true;
    },
    closeModal: (state) => {
      const appRoot = document.getElementById('__app') as HTMLDivElement;
      appRoot.classList.remove('blur-sm');

      state.showModal = false;
    },
  },
});

export const { closeModal, openModal } = searchSlice.actions;

export default searchSlice.reducer;
