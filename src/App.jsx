import React from "react";
import "./App.css";
import CasaDiscografica from "./components/CasaDiscografica/CasaDiscografica";
import AsideOptions from "./components/AsideOptions/AsideOptions";
import { Route} from "wouter";
import SelloDiscografico from "./components/SelloDiscografico/SelloDiscografico";

function App() {

  return (
    <div className="App">
      <AsideOptions />
      <div className="container-center">
          <Route path="/casa" component={CasaDiscografica} />
          <Route path="/sellos" component={SelloDiscografico} />
      </div>
    </div>
  );
}

export default App;
