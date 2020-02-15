import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './components/Navigation';
import Register from './components/Register'; 
import Login from './components/Login'; 
import ProcessText from './components/ProcessText'; 
import Landing from './components/Landing';
import Alerts from './components/Alerts';
import Contacts from './components/Contacts';

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route component={Navigation} />
            <Route component={Alerts} />
            <Route exact path="/" component={Landing} />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/processtext" component={ProcessText} />
                <Route exact path="/contacts" component={Contacts}/>
              </Switch>
          </Fragment>
        </Router>
      </Provider>
  );
}

export default App;
