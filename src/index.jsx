// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoProvider } from './TodoContext';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <TodoProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </TodoProvider>,
  document.getElementById('root')
);
