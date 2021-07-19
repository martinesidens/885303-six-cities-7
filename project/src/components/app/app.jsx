import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './../main/main';
import PropTypes from 'prop-types';
import Sign from '../sign/sign';
import Favorite from '../favorite/favorite';
import Offer from '../offer/offer';
import Error from '../error/error';
// import OffersList from '../offers-list/offers-list';

function App (props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {/*<OffersList />*/}
          <Main count={props.count} city={props.city} email={props.email} />
        </Route>
        <Route path="/Sign" exact component={Sign} >
        </Route>
        <Route path="/Favorite" exact component={Favorite}>
        </Route>
        <Route path="/Offer/:id" exact>
          <Offer dataOffer={props.data} reviewsData={props.reviews} />
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
  reviews: PropTypes.shape({
    number: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }),
};

export default App;
