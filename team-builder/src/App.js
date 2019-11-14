import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>WEBEU4, Inc.</h1>
      <Form data={{ email: "" }} />
    </div>
  );
}

export default App;
