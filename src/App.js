import React from 'react';
import logo from './stange-design-logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, BrowserHistory } from 'react-router-dom';
import PrintareaStool from './PrintareaStool';
import PrintareaSitzwuerfel from './PrintareaSitzwuerfel';
import PrintareaBarhocker from './PrintareaBarhocker';
import PrintareaStellwandDino from './PrintareaStellwandDino';
import PrintareaStellwandMuro from './PrintareaStellwandMuro';

import './css/styles.css';
import Header from './Header';
import Progress from './Progress';
// import Main from './Main';
import Products from './Products';
import ProductList from './ProductList';

function App() {
  return (

    <BrowserRouter >

      {/* <div className="app-js"> */}

      <Header />
      {/* <Main /> */}
      {/* <Progress  /> */}

      <Routes >
        <Route exact path="/" element={<Products />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/printareastool" element={<PrintareaStool />} />
        <Route exact path="/printareasitzwuerfel" element={<PrintareaSitzwuerfel />} />
        <Route exact path="/printarea-barhocker" element={<PrintareaBarhocker />} />
        <Route exact path="/printarea-stellwand-dino" element={<PrintareaStellwandDino />} />
        <Route exact path="/printarea-stellwand-muro" element={<PrintareaStellwandMuro />} />
      </Routes>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;