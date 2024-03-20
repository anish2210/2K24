import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let num = 0;
  for (let i = 0; i <= inputValue; i++) {
    num = num + i;    
  }

  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value)
      }} type="text" placeholder="Enter a number"></input> <br></br><br></br>
      Sum is { num } <br></br><br></br>

      <button onClick={()=>
        setCount(count+1)
      }>Count {count}</button> <br></br><br></br>
    </div>
  );
}

export default App;
