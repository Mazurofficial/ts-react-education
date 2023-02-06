import React, { useEffect, useState } from 'react';

import { Todo } from './types';

import './App.css';
import TodoList from './components/TodoList/TodoList';
import NewTodoForms from './components/NewTodoForms/NewTodoForms';

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
         .then((res) => res.json())
         .then((data: Todo[]) => setTodos(data));
   }, []);

   const addTodo = (text: string) => {
      const newTodo = {
         id: new Date().toString(),
         title: text,
         completed: false,
      };
      setTodos([newTodo, ...todos]);
   };

   return (
      <div className="App">
         <NewTodoForms handleClick={addTodo} />
         <TodoList todos={todos} />
      </div>
   );
}

export default App;
