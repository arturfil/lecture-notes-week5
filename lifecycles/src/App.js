import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar'

// Component Views imports
import Timer from './components/Timer';
import Apartments from './views/Apartments';
import SingleApartment from './views/SingleApartment';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Apartments} />
        <Route exact path="/timer" component={Timer} />
        <Route exact path="/apartments/:id" component={SingleApartment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
