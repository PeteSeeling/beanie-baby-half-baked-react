import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/BeaniesPage">Beanies Page</Link>
        </li>
        <li>
          <Link to="/BeanieDetail">Beanie Detail Page</Link>
        </li>
      </ul>
      <div className='App'>
        <Switch>
          <Route path="/BeaniesPage">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route path="/BeanieDetail"> 
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}