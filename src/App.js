import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Methods from "./pages/Methods";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/methods" exact component={() => <Methods />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
