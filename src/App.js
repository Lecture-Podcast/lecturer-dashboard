import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Provider> */}
          <Router/>
        {/* </Provider>   */}
      </BrowserRouter>
    </div>
  );
}

export default App;
