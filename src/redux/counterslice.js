import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',   // Nom du slice
  initialState: { value: 0 },   // État initial
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
    incrementByAmount: (state, action) => { 
        state.value += action.payload;  // Ajout du payload
      }
  },
});

// Export des actions pour les utiliser dans le composant
export const { increment, decrement, reset ,incrementByAmount} = counterSlice.actions;

// Export du reducer pour l'ajouter au store
export default counterSlice.reducer;
