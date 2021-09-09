import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Component Views imports
import Timer from './components/Timer';
import Apartments from './views/Apartments';
import SingleApartment from './views/SingleApartment';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Apartments} />
        <Route path="/timer" component={Timer} />
        <Route path="/apartments/:id" component={SingleApartment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
