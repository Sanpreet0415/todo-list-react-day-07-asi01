import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => (
  <div>
    <h1>Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
