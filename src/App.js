import React from 'react';
// import logo from './stange-design-logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, BrowserHistory } from 'react-router-dom';
import PrintareaStoolMaks from './PrintareaStoolMaks';
import PrintareaStoolSitzwuerfel from './PrintareaStoolSitzwuerfel';
import PrintareaBarhocker from './PrintareaBarhocker';
import PrintareaStellwandDino from './PrintareaStellwandDino';
import PrintareaStellwandMuro from './PrintareaStellwandMuro';
import PrintareaStellwandPinPoint from './PrintareaStellwandPinPoint';
import PrintareaStellwandPinPointXL from './PrintareaStellwandPinPointXL';
import NumberOfStools from './NumberOfStools';
import ColorOptionsStoolMaks from './ColorOptionsStoolMaks';
import ColorOptionsStoolSitzwuerfel from './ColorOptionsStoolSitzwuerfel';

import './css/styles.css';
import Header from './Header';
import Products from './Products';
import ProductList from './ProductList';


function App() {
  return (

    <BrowserRouter >

      <Header />

      <Routes >
        <Route exact path="/anfrage/" element={<Products />} />
        <Route exact path="/anfrage/productlist" element={<ProductList />} />
        <Route exact path="/anfrage/printarea-stool-maks" element={<PrintareaStoolMaks />} />
        <Route exact path="/anfrage/printareasitzwuerfel" element={<PrintareaStoolSitzwuerfel />} />
        <Route exact path="/anfrage/printarea-barhocker" element={<PrintareaBarhocker />} />
        <Route exact path="/anfrage/printarea-stellwand-dino" element={<PrintareaStellwandDino />} />
        <Route exact path="/anfrage/printarea-stellwand-muro" element={<PrintareaStellwandMuro />} />
        <Route exact path="/anfrage/printarea-stellwand-pinpoint" element={<PrintareaStellwandPinPoint />} />
        <Route exact path="/anfrage/printarea-stellwand-pinpoint-xl" element={<PrintareaStellwandPinPointXL />} />
        <Route exact path="/anfrage/color-options-stool-maks" element={<ColorOptionsStoolMaks />} />
        <Route exact path="/anfrage/color-options-stool-sitzwuerfel" element={<ColorOptionsStoolSitzwuerfel />} />
        <Route exact path="/anfrage/number-of-stools" element={<NumberOfStools />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;