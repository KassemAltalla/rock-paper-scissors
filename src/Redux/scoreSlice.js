import { createSlice } from "@reduxjs/toolkit";

// الحصول على الـ Score من localStorage أو القيمة الأولية 0
const initialScore = parseInt(localStorage.getItem("GameScore")) || 0;

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    value: initialScore,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("GameScore", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("GameScore", state.value);
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem("GameScore", 0);
    },
  },
});

export const { increment, decrement, reset } = scoreSlice.actions;
export default scoreSlice.reducer;
