import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './store/reducer/users'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

const app = (
  <React.StrictMode>
     <Provider store={store} >
    <BrowserRouter basename="/github_search"  >
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
