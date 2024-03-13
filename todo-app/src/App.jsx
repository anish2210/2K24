import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([{
    title: "Hit the Gym",
    description: "Hit the gym form Monday morning",
    completed: false
  },{
    title: "Learn DSA",
    description: "Complete Linked List lectures.",
    completed: true
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: "new todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      
      <button onClick={addTodo}>Add a radom todo</button>
      
      {todos.map(function(todo){
        return <Todo title={todo.title} description= {todo.description} />
      })}

    </div>
  )

}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App


