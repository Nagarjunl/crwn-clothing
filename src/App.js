import './App.css';
import {  Route, Switch } from "react-router-dom";
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>        
       <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>     
    </div>
  );
}

export default App;
