import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddToy from './pages/AddToy';
import ToyDetails from './pages/ToyDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-toy" component={AddToy} />
        <Route path="/toy/:id" component={ToyDetails} />
      </Switch>
    </Router>
  );
}

export default App;
