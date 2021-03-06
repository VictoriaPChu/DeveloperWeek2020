import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './components/Navigation';
import Apply from './components/Apply'; 
import Tools from './components/Tools'; 
import About from './components/About'
import Landing from './components/Landing';
import Guidelines from './components/Guidelines';
import Processing from './components/Processing';
import News from './components/News';

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route component={Navigation} />
            <Route exact path="/" component={Landing} />
              <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/tools" component= {Tools}/>
                <Route exact path="/guidelines" component= {Guidelines}/>
                <Route exact path="/apply" component={Apply}/>
                <Route exact path="/processing" component={Processing}/>
                <Route exact path="/news" component={News}/>

              </Switch>
          </Fragment>
        </Router>
      </Provider>
  );
}

export default App;
