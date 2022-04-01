import React from 'react';
import './App.css';
import { Switch,Route, Redirect } from 'react-router-dom';
import CheckoutPage from './Pages/Checkout/checkout.component';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './Components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'


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
        <Route exact path='/sign-in' render={()=> this.props.currentUser ? (<Redirect to='/'/>) :(<SignInAndSignOut/>) }></Route>
        <Route exact path ='/checkout' component={CheckoutPage}></Route>
      </Switch>
    </div>
  );
}
};

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps ,mapDispatchToProps )(App);
