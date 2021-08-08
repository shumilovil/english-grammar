import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import { YMInitializer } from 'react-yandex-metrika';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <ScrollMemory />
        <App />
      </Provider>
    </BrowserRouter>
    <YMInitializer accounts={[83801950]} options={{ defer: true }} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
