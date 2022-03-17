import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './Pages/homepage.component';

const Hiem = ()=> (
  <div>
    <h1>Salut</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hiem' component={Hiem}></Route>
      </Switch>
    </div>
  );
}

export default App;
