import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//setup store
import store from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

//store to persit
const persistedStore = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={<div>loading...</div>} persistor={persistedStore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
