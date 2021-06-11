import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './../main/main';
import PropTypes from 'prop-types';
import Sign from '../sign/sign';
import Favorite from '../favorite/favorite';
import Offer from '../offer/offer';
import Error from '../error/error';


function App (props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main count={props.count} city={props.city} email={props.email} />
        </Route>
        <Route path="/Sign" exact component={Sign} >
        </Route>
        <Route path="/Favorite" exact component={Favorite}>
        </Route>
        <Route path="/Offer/:id" exact component={Offer}>
        </Route>
        <Route path="/Error" component={Error}>
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
