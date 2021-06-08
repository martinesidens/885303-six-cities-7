import React from 'react';
import Main from './../main/main';
import PropTypes from 'prop-types';

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
