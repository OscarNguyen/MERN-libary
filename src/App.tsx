import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios'
import { useSelector } from 'react-redux'

import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import NavbarCmp from './components/NavbarCmp/NavbarCmp';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import SignUp from './components/auth/SignUp/SignUp';
import SignIn from './components/auth/SignIn/SignIn';
import PrivateRoute from './components/utils/PrivateRoute'
import { AppState } from './types'

axios.defaults.baseURL = "http://localhost:5001/api/v1/";

const history = createBrowserHistory();

function App() {
  const isLogin = useSelector((state: AppState) => state.user.isLogin)
  return (
    <Router history={history} >
      <div className="App">

        <NavbarCmp />
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute isLogin={isLogin} path="/homepage" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
