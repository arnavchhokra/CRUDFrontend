import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Clients from "./Clients";

function App() {

  return (
    <div className="App">
        <Sidebar  />
      <Clients />
    </div>
  );
}

export default App;
