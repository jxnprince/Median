// imports here:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { UserProvider } from './context/UserContext.js';
import { ModalStyleProvider } from './context/ReactModalStylesContext.js';


import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf.js';

import "./reset.css";



const store = configureStore();


// for development
if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

}





// used to simplify ReactDOM.render below
function Root() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <ModalStyleProvider >
            <App />
          </ModalStyleProvider>
        </UserProvider>
      </ BrowserRouter>
    </Provider>
    </>
  );

}




ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
