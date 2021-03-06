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
import GoogleMapComponent from './GoogleMapComponent';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
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
          <Route path="/about" component = {AboutPage} />
          <Route path="/menu" component = {MenuPage} />
          <Route path="/contact" component = {AboutPage} />
          <Route path="/map" component = {GoogleMapComponent} exact />
          <Route path="/admin" component = {Signin} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
