
import React from 'react';
import reactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router';
const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <Provider store={store}>
       <RouterProvider router={router}/>
     </Provider>
   </React.StrictMode>
);

reportWebVitals();