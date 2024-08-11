import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  if (todos === undefined || removeTodo === undefined) {
    return <p>Context is not available</p>; // Debugging output
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
