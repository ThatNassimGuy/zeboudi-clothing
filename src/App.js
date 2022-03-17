import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';



function App() {
  return (
    <div >
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
