import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    AddTodo: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    EditTodo: (state, action) => {
      state.value.splice(action.payload["index"], 1, action.payload["task"]);
    },
    ToggleComplete: (state, action) => {
        const index = action.payload;
        const todoItem = state.value[index];
        todoItem.completed = !todoItem.completed;
      },
  },
});
export const { AddTodo, RemoveTodo, EditTodo ,ToggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;
