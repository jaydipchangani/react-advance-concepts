import { createSlice, configureStore } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const store = configureStore({ reducer: { theme: themeSlice.reducer } });
