import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Router/>
        </Provider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
