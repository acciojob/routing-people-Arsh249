
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import './../styles/App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/user/:userId" component={UserDetail} />
      </Switch>
    </Router>
  )
}

export default App
