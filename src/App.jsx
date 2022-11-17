import React from "react";
import "./App.css";
import TableGeneral from "./components/CasaDiscografica/CasaDiscografica";
import AsideOptions from "./components/AsideOptions/AsideOptions";

function App() {

  return (
    <div className="App">
      <AsideOptions/>
      <TableGeneral/>
    </div>
  );
}

export default App;
