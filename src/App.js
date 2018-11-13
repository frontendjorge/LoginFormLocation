import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import MapPage from './components/MapPage/mapPage';
import './App.css';

class App extends Component {
  render() {
      return (
    
        <Router>
              <div>
                  <Route exact path="/" component={LoginPage} />
                    <Route exact path="/new" component={MapPage} />
            </div>
        </Router>
    
    );
  }
}

export default App;
