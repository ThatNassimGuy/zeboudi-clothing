import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './Components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot=> {
            this.setState({
              currentUser:{
                id : snapShot.id,
                ...snapShot.data()
              }
            },()=>{
              console.log(this.state);
            });
          });

        }
        this.setState({currentUser:userAuth})
      }
    );
  }
  componentWillUnmount (){
    this.unsubscribedFromAuth();
  }
  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/sign-in' component={SignInAndSignOut}></Route>
      </Switch>
    </div>
  );
}
}

export default App;
