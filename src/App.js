import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/information' exact component={Services}/>
        <Route path='/projects' exact component={Products}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
