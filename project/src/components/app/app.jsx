import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './../main/main';
import PropTypes from 'prop-types';
import Sign from '../sign-in/sign-in';
// import Favorite from '../favorites/favorites';
// import Offer from '../offers/offers';


function App (props) {
  return (
    <Main count={props.count} city={props.city} email={props.email} />
  );
}

App.propTypes = {
  city: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default App;
