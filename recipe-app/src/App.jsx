import { useState } from "react";
import "./App.css";
import Routers from "./routers/Routers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
