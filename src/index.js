import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.rtl.min.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import rootRaducers from './components/Redux/reducers';
import Users, { userSlice } from './features/Users';
import  useReducer  from './features/Users';
import movieRaducer from './features/movie'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = createStore(rootRaducers);
const store = configureStore({
  reducer:{
    users:useReducer,
    movies : movieRaducer
  }
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);


reportWebVitals();
