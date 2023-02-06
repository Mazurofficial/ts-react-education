import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../types';

interface ITodoList {
   todos: Todo[];
}

const TodoList = ({ todos }: ITodoList) => {
   return (
      <ul>
         {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} {...todo} />
         ))}
      </ul>
   );
};

export default TodoList;
