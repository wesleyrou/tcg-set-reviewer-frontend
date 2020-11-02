import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardPage from '../DashboardPage/DashboardPage';

class App extends React.Component {
  render() {
    return <>
      <Header/>
      <main>
        <Switch>
          <Route exact path = '/' component = {LandingPage}/>
          <Route path = '/register' component = {RegistrationPage}/>
          <Route path = '/dashboard' component = {DashboardPage}/>
        </Switch>
      </main>      
    </>
  }
  
}

export default App;
