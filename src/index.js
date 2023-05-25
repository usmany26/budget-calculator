import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UpdateContextProvider from './context/update-context';

ReactDOM.render(
  <UpdateContextProvider>
      <App />
  </UpdateContextProvider>,
  document.getElementById('root')
);


