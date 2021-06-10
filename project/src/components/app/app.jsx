import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './../main/main';
import PropTypes from 'prop-types';
import Sign from '../sign-in/sign-in';
import Favorite from '../favorites/favorites';
import Offer from '../offers/offers';
import Error from '../error-404/error-404';


function App (props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main count={props.count} city={props.city} email={props.email} />
        </Route>
        <Route path="/Sign In" exact component={Sign} >
        </Route>
        <Route path="/Favorites" exact component={Favorite}>
        </Route>
        <Route path="/Offer/:id" exact component={Offer}>
        </Route>
        <Route component={Error}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  city: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default App;
