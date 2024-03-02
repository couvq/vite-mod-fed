import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Host application</h1>
      <Button />
    </>
  );
}

export default App;
