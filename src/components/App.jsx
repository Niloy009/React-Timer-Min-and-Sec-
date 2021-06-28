import React from "react";
import "./App.css";
import Timer from "./mainclock";

const App = () => {
  return (
    <div className="App">
      <h1>React Timer</h1>
      <Timer />
      <p
        className="text-muted pt-3"
        style={{ marginLeft: "430px", fontSize: "12px" }}
      >
        Developed By Niloy Saha Roy
      </p>
    </div>
  );
};

export default App;
