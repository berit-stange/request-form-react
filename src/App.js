import logo from './stange-design-logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrintareaStool from './PrintareaStool';


import './css/styles.css';
import Header from './Header';
import Main from './Main';
import Products from './Products';

function App() {
  return (

    <BrowserRouter >

      {/* <div className="app-js"> */}

      <Header />
      {/* <Main /> */}
      {/* <Products /> */}

      <Routes >
        <Route exact path="/p" element={<Products />} />
        <Route exact path="/printareastool" element={<PrintareaStool />} />
      </Routes>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;