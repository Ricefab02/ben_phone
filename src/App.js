import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Brand from './components/Brand';
import Phone from './components/Phone';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="AppContent">
        <Router>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/phones/:phoneId/repairs" component={Phone} />
            <Route path="/brands/:brandId/phones" component={Brand} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
