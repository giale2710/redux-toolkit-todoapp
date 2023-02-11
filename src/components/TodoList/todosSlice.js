import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: "todoList",
  initialState: {
    taskList: [
      // { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
      { id: 1, name: 'Learn Redux', completed: true, priority: 'High' },
      { id: 2, name: 'Learn English', completed: false, priority: 'Low' },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.taskList.push(action.payload);
    }, // action creators
    toggleTodoStatus: (state, action) => {
      console.log(action.payload);
      const currentTodo = state.taskList.find(
        (todo) => todo.id === action.payload
        );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    deleteTodo: (state, action) => {
      console.log("id: ", action.payload.id)
      state.taskList = state.taskList.filter(
        (item) => item.id !== action.payload.id
        );
    }
  }
});
