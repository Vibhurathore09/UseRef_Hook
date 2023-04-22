import { useEffect } from "react";
import Header from "./Components/Header";
import "./app.css";
import React, { useState, useRef } from "react";

function App() {
  const [input, setInput] = useState("");
  const inputField = useRef("");

  const clickHandler = () =>{
    // inputField.current.focus();
    // inputField.current.value = "Vibhu ";
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red";
  }

  const formHandler = (e) => {
    setInput(e.target.value);
  };
  return (  
    <div className="App">
      <Header />
      <input ref = {inputField} type="text" value={input} onChange={formHandler} />
      {/* <h4>Application has been rendered {counter.current} times</h4> */}
      {/* <h4>Prev State was {prevState.current}  </h4> */}
      <button onClick = {clickHandler}>Click me</button>
    </div>
  );
}

export default App;
