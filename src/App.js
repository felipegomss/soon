import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GlobalStyle, { Loading, Main } from "./Styles/globalStyles";
import Contato from "./Pages/Contato";

function App() {
  const [load, setload] = useState({ display: "flex" });

  window.addEventListener("load", function (event) {
    console.log("Todos os recursos terminaram o carregamento!");
    setload({ display: "none" });
  });
  return (
    <>
      <Loading style={load} />
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/contato" exact component={Contato} />
          </Switch>
        </Main>
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
