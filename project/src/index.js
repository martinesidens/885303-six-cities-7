import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import getOffers from './mocks/offers';
import getReviews from './mocks/reviews';

const appSettings = {
  count: 330,
  city: 'Paris',
  email: 'martines.idens@gmail.com',
};

ReactDOM.render(
  <React.StrictMode>
    <App count={appSettings.count} city={appSettings.city} email={appSettings.email} data={getOffers()} reviews={getReviews()}/>
  </React.StrictMode>,
  document.getElementById('root'));
