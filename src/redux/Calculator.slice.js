import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: "",
    btns: [
      "1",
      "2",
      "3",
      "-",
      "4",
      "5",
      "6",
      "*",
      "7",
      "8",
      "9",
      "/",
      "0",
      ".",
      "=",
      "+",
      "Clear",
      "Back",
    ],
  },
  reducers: {
    appendValue: (state, action) => {
      state.value += action.payload;
    },
    clearValue: (state) => {
      state.value = "";
    },
    calculate: (state) => {
      try {
        state.value = eval(state.value).toString();
      } catch {
        state.value = "Error";
      }
    },
    backValue: (state) => {
      state.value = state.value.slice(0, -1);
    },

    actionValuse: (state, action) => {
      if (action.payload === "=") {
        state.value = eval(state.value);
      } else if (action.payload === "Back") {
        state.value = state.value.slice(0, -1);
      }  else if (action.payload === "Clear") {
        state.value = "";
      }else {
        state.value += action.payload;
      }
    },
  },
});

export const { appendValue, clearValue, calculate, backValue, actionValuse } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
