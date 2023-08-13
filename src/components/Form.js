import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from 'features/todo/todoSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');

  const addTodoHandle = () => {
    const todo = {
      id: nanoid(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoValue('');
  };

  return (
    <form className="w-full flex" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        value={todoValue}
        placeholder="Type something..."
        onChange={e => {
          setTodoValue(e.target.value);
        }}
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
      />
      <button
        type="submit"
        onClick={() => addTodoHandle()}
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
