import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  ); 
}

function Count() {
  // console.log("count rerendering");
  return <div>
  <CoutnRenderer/>
  <Buttons />
  <EvenText/>
  </div>
}

function CoutnRenderer (){
  // console.log("countRenderer rerendering");
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  // console.log("Buttons rerendering");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1);
      }}>Increase</button>

      <button onClick={() => {
        setCount(count => count - 1);
      }}>Decrease</button>
    </div>
  );
}

function EvenText (){
console.log("eventext rerendering");
const isEven = useRecoilValue(evenSelector);

return (
    <div>
      {isEven? "it is Even" : null}
    </div>
  )

}
export default App;
  