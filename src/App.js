import './App.css';
import {  BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Queue from './components/Queue';
import Fibonacci from './components/Fibonacci';
import Egyptian_fraction from './components/Egyptian_fraction';
import Binary_search from './components/Binary_search';
import Merge_sort from './components/Merge_sort';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <NavLink exact to="/">
            <header className="header">
              <h1 className="header__text">...System Programming...</h1>
            </header>
          </NavLink>

          <ul className="nav">
            <li className="nav__item"><NavLink className="item__link" activeClassName="active" exact to="/queue">Queue</NavLink></li>
            <li className="nav__item"><NavLink className="item__link" activeClassName="active" to="/egyptian_fraction">Egyptian Fraction</NavLink></li>
            <li className="nav__item"><NavLink className="item__link" activeClassName="active" to="/binary_search">Binary Search</NavLink></li>
            <li className="nav__item"><NavLink className="item__link" activeClassName="active" to="/fibonacci">Fibonacci</NavLink></li>
            <li className="nav__item"><NavLink className="item__link" activeClassName="active" to="/merge_sort">Merge Sort</NavLink></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/queue" component={Queue}/>
          <Route path="/fibonacci" component={Fibonacci}/>
          <Route path="/egyptian_fraction" component={Egyptian_fraction}/>
          <Route path="/binary_search" component={Binary_search}/>
          <Route path="/merge_sort" component={Merge_sort}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
