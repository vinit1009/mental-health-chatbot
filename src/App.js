import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
