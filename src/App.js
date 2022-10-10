// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import ListUsers from './components/ListUsers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div> 
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
              {/* <Route path="/" component={ListUsers} /> */}
                <Route path="/user-list" component={ListUsers} />
                <Route path="/add-user/:id" component={CreateUserComponent} />
                <Route path = "/view-employee/:id" component = {ViewUserComponent}></Route>
              </Switch>
             
            </div>
          {/* <FooterComponent/> */}
        </Router>
    </div> 
  );
}

export default App;
