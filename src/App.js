import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cadastrar from './pages/Cadastrar';
import Clientes from './pages/Clientes';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Cadastrar} /> 
          <Route path='/Clientes' component={Clientes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
