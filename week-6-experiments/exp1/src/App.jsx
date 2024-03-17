import { useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButtons></HeaderWithButtons>
      <Header title="anish2" />
      <Header title="anish3" />
    </div>
  );
}

function HeaderWithButtons() {
  const [title, setTitle] = useState("My name is Anish Jaiswal");
  
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  
  return (
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
    </>
  );
}


function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
