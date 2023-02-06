import React from 'react';
import { Todo } from '../../types';

interface ITodoItem extends Todo {
   style?: React.CSSProperties;
   children?: React.ReactNode;
}

const TodoItem = ({ id, title, completed, handleCheck }: ITodoItem) => {
   return (
      <li
         id={id}
         //  style={{
         //     color: 'red',
         //     background: 'white',
         //     ...style,
         //  }}
      >
         <input type="checkbox" checked={completed} onChange={handleCheck} />
         <span>{title}</span>
         <span>&times;</span>
      </li>
   );
};

export default TodoItem;
