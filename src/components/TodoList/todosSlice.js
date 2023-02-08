import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: [
    // { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 1, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 2, name: 'Learn English', completed: false, priority: 'Low' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    deleteTodo: (state, action) => {
      console.log(action.payload.id)
      state.filter((item) => item.id !== action.payload.id);
    }
  }
});
