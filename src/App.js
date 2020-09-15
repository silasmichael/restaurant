import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Board from './Board'
import CustomerCare from './CustomerCare'
import Kitchen from './Kitchen'
import Management from './Management';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Signin from './Signin';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Switch>
          <Route path="/" component = {Home} exact />
          <Route path="/board" component = {Board} />
          <Route path="/customercare" component = {CustomerCare} />
          <Route path="/kitchen" component = {Kitchen} />
          <Route path="/management" component = {Management} />
          <Route path="/about" component = {About} />
          <Route path="/contact" component = {Contact} exact />
          <Route path="/menu" component = {Menu} exact />
          <Route path="/admin" component = {Signin} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
