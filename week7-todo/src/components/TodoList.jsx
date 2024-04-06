import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../store/atoms/atom'

function TodoList() {
    console.log("im from displayer.jsx");
    const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
        <input type='text' placeholder = 'Filter todos' />
        {todoList.map(todo => (
            <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
        ))}
    </div>
  )
}

export default TodoList