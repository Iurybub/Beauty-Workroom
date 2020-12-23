import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./static/css/bootstrap.css"
import "./style.css"
import "./static/css/dark.css"
import "./static/css/swiper.css"
import "./static/headphones/headphones.css"
import "./static/headphones/css/fonts.css"
import "./static/css/font-icons.css"
import "./static/css/custom.css"
// REDUX
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))

);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
