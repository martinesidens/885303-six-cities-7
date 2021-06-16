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
        <Route path="/Offer/:id" exact>
          <Offer dataOffer={props.data} />
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
  data: PropTypes.shape({
    image: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    property: PropTypes.shape({
      type: PropTypes.string.isRequired,
      rooms: PropTypes.string.isRequired,
      adults: PropTypes.string.isRequired,
    }),
    price: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    advantages: PropTypes.array.isRequired,
  }),
};

export default App;
