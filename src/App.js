import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
    <Route exact path='/' component={Home} />
      <Route path='/pizza' component={Form} />
      </Router>
  );
};
export default App;
