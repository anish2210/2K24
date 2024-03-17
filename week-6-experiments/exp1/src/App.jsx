import { useState } from "react"

function App() {
  const [title, setTitle] = useState("My name is Anish Jaiswal")

  function updateTitle(){
     setTitle("my name is "+ Math.random()); 
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="anish2"/>
      <Header title="anish3"/>
      <Header title="anish4"/>
      <Header title="anish5"/>
      <Header title="anish6"/>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
