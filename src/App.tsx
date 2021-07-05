import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import MyList from './components/myList/MyList';

function App() {
  return (
    <Router>
      <div className="App">
        <header >
          <nav className="App-nav">
            <div>
              <ul className="Nav-list">
                <li className="Nav-item">
                  <NavLink
                    className="Nav-link"
                    activeClassName="is-active"
                    to="/"
                    exact
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="Nav-item">
                  <NavLink
                    className="Nav-link"
                    activeClassName="is-active"
                    to="/mylist"
                    exact
                  >
                    <span>My Play List</span>
                  </NavLink>
                </li>
              </ul>
            </div>

          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/mylist" component={MyList}></Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
