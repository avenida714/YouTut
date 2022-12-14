import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from './components/auth/SignUpForm';
import LoginForm from './components/auth/LoginForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/Profile/User';
import { authenticate } from './store/session';
import WatchTut from './components/Tuts/WatchTut';
import MainFeed from './components/MainFeed';
import SearchFeed from './components/Search/SearchFeed';

function App() {
  const [loaded, setLoaded] = useState(false);





  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return user ? (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <MainFeed  />
        </ProtectedRoute>
        <ProtectedRoute path='/search/:searchText' exact={true} >
          <SearchFeed  />
        </ProtectedRoute>
        <ProtectedRoute exact path="/tuts/:tutId">
          <WatchTut />
        </ProtectedRoute>
        <ProtectedRoute>
          <h1> Page Not Found.</h1>
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
    <Redirect to="/login" />
    <Switch>
      <Route path="/login" exact={true}>
        <LoginForm />
      </Route>

      <Route path="/sign-up" exact={true}>
        <SignUpForm />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
