import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.render(  
  <Provider store={store}>    
      <App />      
    </Provider>,  
  document.getElementById('root')
);


// {/* <PersistGate loading={<h1>Loading...</h1>} persistor={store.persistor}></PersistGate>
// </PersistGate> */}

