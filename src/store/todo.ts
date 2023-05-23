import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoDataTypes } from "../types/dataTypes";

const todoSlice = createSlice({
  name: "todo",
  initialState: { data: [] as TodoDataTypes[] },

  reducers: {
    get: (state, action: PayloadAction<TodoDataTypes[]>) => {
      state.data = action.payload;
    },
    add: (state, action: PayloadAction<TodoDataTypes>) => {
      state.data = [...state.data, action.payload];
    },
    edit: (state, action: PayloadAction<TodoDataTypes>) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    remove: (state, action: PayloadAction<TodoDataTypes>) => {
      state.data = state.data.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
