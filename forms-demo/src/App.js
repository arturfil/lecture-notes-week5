import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';

// Import Routes
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import AddMovie from './views/AddMovie';

function App() {
  return (
    <div className="App">
      {/* Router Container */}
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* Routes Go Here */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addMovie" component={AddMovie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
