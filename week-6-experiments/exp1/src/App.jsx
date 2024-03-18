import { useState } from "react";

function App() {
  const [count, setCount] = useState([{
    id:1,
    title:"go to the gym",
    description:"must go"
  }, {
    id:2,
    title:"go to the market",
    description:"must go"
  }, {
    id:3,
    title:"go to the school",
    description:"must go"
  }]);

     function newTodo(){
       setCount([...count, {
         id:"4",
         title: Math.random(),
         description: Math.random()
       }])
     
      //  setCount(newTodo);
     }

  return <>
    <button onClick={newTodo}>Add new todo</button>

     {count.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
  </>
}


function Todo({title, description}){
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
}

export default App;
