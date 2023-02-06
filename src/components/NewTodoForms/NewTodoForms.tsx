import React, { useRef } from 'react';

interface INewTodoForm {
   handleClick: (text: string) => void;
}

const NewTodoForms = ({ handleClick }: INewTodoForm) => {
   const inputRef = useRef<HTMLInputElement | null>(null);

   const onClick = () => {
      if (inputRef.current) {
         handleClick(inputRef.current.value);
      }
   };

   return (
      <>
         <input type="text" placeholder="New todo" ref={inputRef} />
         <button onClick={onClick}> Add todo</button>
      </>
   );
};

export default NewTodoForms;
