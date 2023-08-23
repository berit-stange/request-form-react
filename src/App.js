import React from 'react';
import { BrowserRouter, Routes, Route/* , BrowserHistory */ } from 'react-router-dom';
import PrintareaStoolMaks from './PrintareaStoolMaks';
import PrintareaStoolSitzwuerfel from './PrintareaStoolSitzwuerfel';
import PrintareaBarhocker from './PrintareaBarhocker';
import PrintareaStellwandDino from './PrintareaStellwandDino';
import PrintareaStellwandMuro from './PrintareaStellwandMuro';
import PrintareaStellwandPinPoint from './PrintareaStellwandPinPoint';
import PrintareaStellwandPinPointXL from './PrintareaStellwandPinPointXL';
import PrintareaStellwandQuickPointHoch from './PrintareaStellwandQuickPointHoch';

import NumberOfStools from './NumberOfStools';
import ColorOptionsStoolMaks from './ColorOptionsStoolMaks';
import ColorOptionsStoolSitzwuerfel from './ColorOptionsStoolSitzwuerfel';
import ColorOptionsWall from './ColorOptionsWall';
import NumberOfWalls from './NumberOfWalls';
import CustomerData from './CustomerData';

import Footer from './Footer';

import './css/styles.css';
import Header from './Header';
import Products from './Products';
import ProductList from './ProductList';


function App() {
  return (

    <BrowserRouter basename="/anfrage">

      <Header />

      <Routes >
        <Route exact path="/" element={<Products />} />
        <Route exact path="/productlist" element={<ProductList />} />

        <Route exact path="/printarea-stool-maks/" element={<PrintareaStoolMaks />} />
        <Route exact path="/printarea-sitzwuerfel/" element={<PrintareaStoolSitzwuerfel />} />
        <Route exact path="/printarea-barhocker/" element={<PrintareaBarhocker />} />
        <Route exact path="/printarea-stellwand-dino" element={<PrintareaStellwandDino />} />
        <Route exact path="/printarea-stellwand-muro" element={<PrintareaStellwandMuro />} />
        <Route exact path="/printarea-stellwand-pinpoint" element={<PrintareaStellwandPinPoint />} />
        <Route exact path="/printarea-stellwand-pinpoint-xl" element={<PrintareaStellwandPinPointXL />} />
        <Route exact path="/printarea-stellwand-quickpoint-hoch" element={<PrintareaStellwandQuickPointHoch />} />

        <Route exact path="/color-options-stool-maks" element={<ColorOptionsStoolMaks />} />
        <Route exact path="/color-options-stool-sitzwuerfel" element={<ColorOptionsStoolSitzwuerfel />} />
        <Route exact path="/color-options-wall" element={<ColorOptionsWall />} />
        <Route exact path="/number-of-stools" element={<NumberOfStools />} />
        <Route exact path="/number-of-walls" element={<NumberOfWalls />} />
        <Route exact path="/customer-data" element={<CustomerData />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;