import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const countSentenceRent = {
  count: 330,
  city: 'Paris',
  email: 'martines.idens@gmail.com',
};

ReactDOM.render(
  <React.StrictMode>
    <App count={countSentenceRent.count} city={countSentenceRent.city} email={countSentenceRent.email} />
  </React.StrictMode>,
  document.getElementById('root'));
