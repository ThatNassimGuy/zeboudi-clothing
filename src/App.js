import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './Components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import { connect } from 'react-redux';



class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot=> {
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          });

        }
        setCurrentUser(userAuth)
      }
    );
  }
  componentWillUnmount (){
    this.unsubscribedFromAuth();
  }
  render(){
  return (
    <div >
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/sign-in' component={SignInAndSignOut}></Route>
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps )(App);
