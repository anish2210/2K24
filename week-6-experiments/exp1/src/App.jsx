
function App() {
  return (
    <div>
      <CardWrapper>
        <TextComponent/>
        <TextComponent/>
        <TextComponent/>
      </CardWrapper>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </div>
  );
}
console.log("console2");

function CardWrapper({ children }) {
  console.log("console")
  return <div style={{ border: "2px solid black", padding:20, margin:10 }}>{children}</div>
}

function TextComponent() {
  console.log("console1")
  return <div>hi there</div>
}

export default App;