import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/atoms/atom';

function TodoInput() {
    console.log("im from adder.jsx");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [setTodoList] = useSetRecoilState(todoListState);

    const handleSubmit = () => {
        setTodoList(prev => [
            ...prev,
            {
                id: Math.random().toString(36).substr(2, 9), title, description,
            },
        ]);
        setTitle('');
        setDescription('');
    };

  return (
    <div>
        <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={e=> setTitle(e.target.value)}
        />
        <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={e=> setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Add todo</button>
    </div>
  )
}

export default TodoInput