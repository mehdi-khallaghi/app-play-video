import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.rtl.min.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootRaducers from './components/Redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootRaducers);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);


reportWebVitals();
