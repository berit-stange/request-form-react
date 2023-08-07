import React from 'react';
// import logo from './stange-design-logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, BrowserHistory } from 'react-router-dom';
import PrintareaStool from './PrintareaStool';
import PrintareaSitzwuerfel from './PrintareaSitzwuerfel';
import PrintareaBarhocker from './PrintareaBarhocker';
import PrintareaStellwandDino from './PrintareaStellwandDino';
import PrintareaStellwandMuro from './PrintareaStellwandMuro';
import PrintareaStellwandPinPoint from './PrintareaStellwandPinPoint';
import PrintareaStellwandPinPointXL from './PrintareaStellwandPinPointXL';

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
        <Route exact path="/anfrage/" element={<Products />} />
        <Route exact path="/anfrage/productlist" element={<ProductList />} />
        <Route exact path="/anfrage/printarea-stool-maks" element={<PrintareaStool />} />
        <Route exact path="/anfrage/printareasitzwuerfel" element={<PrintareaSitzwuerfel />} />
        <Route exact path="/anfrage/printarea-barhocker" element={<PrintareaBarhocker />} />
        <Route exact path="/anfrage/printarea-stellwand-dino" element={<PrintareaStellwandDino />} />
        <Route exact path="/anfrage/printarea-stellwand-muro" element={<PrintareaStellwandMuro />} />
        <Route exact path="/anfrage/printarea-stellwand-pinpoint" element={<PrintareaStellwandPinPoint />} />
        <Route exact path="/anfrage/printarea-stellwand-pinpoint-xl" element={<PrintareaStellwandPinPointXL />} />
      </Routes>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;