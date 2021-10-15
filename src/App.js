import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GlobalStyle from "./Styles/globalStyles";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
