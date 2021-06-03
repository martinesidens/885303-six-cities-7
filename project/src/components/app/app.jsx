import React from 'react';
import ReactDOM from 'react-dom';
import Main from './../main/main';

function App (props) {
  ReactDOM.render(
    <Main count={props.count} city={props.city} email={props.email} />,
    document.getElementById('root'),
  );
  return null;
}

export default App;
