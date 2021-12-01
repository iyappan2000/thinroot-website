import React from "react";
import "./App.css";
import Adaptive from "./components/Adaptive/Adaptive";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <Adaptive />
    </div>
  );
}

export default App;
