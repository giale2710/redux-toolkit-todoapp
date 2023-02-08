import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
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
      console.log(action.payload.id, 'ididdi');
      const listTodo = [...state].filter(task=>task.id !== action.payload.id)
      // state = [...state.filter((todo) => todo.id !== action.payload.id)]; 
      // console.log(state.filter((todo) => todo.id !== action.payload.id));
      console.log(listTodo);
    }
  }
});
