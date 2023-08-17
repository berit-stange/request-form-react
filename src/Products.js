import React from 'react';
import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';




function Products() {
    return (
        <div className="products">

            <div className="progress">
                <div className='line'></div>
                <div className='button-box'>
                    <button className="button-progress active" onClick={() => { }} >1</button>
                    <button className="button-progress" onClick={() => { }} >2</button>
                    <button className="button-progress" onClick={() => { }} >3</button>
                    <button className="button-progress" onClick={() => { }} >4</button>
                    <button className="button-progress" onClick={() => { }} >5</button>
                    <button className="button-progress" onClick={() => { }} >6</button>
                </div>
            </div>

            <div className="product-grid">

                <Link to="/anfrage/printarea-stool-maks">
                    <div className="product-item hocker-maks"></div>
                    <p className="product-title">Hocker MAKS</p>
                </Link>

                <Link to="/anfrage/printareasitzwuerfel">
                    <div className="product-item hocker-sitzwuerfel"></div>
                    <p className="product-title">Hocker SITZWÜRFEL</p>
                </Link>

                <Link to="/anfrage/printarea-barhocker">
                    <div className="product-item hocker-barhocker"> </div>
                    <p className="product-title">Hocker BARHOCKER</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-dino">
                    <div className="product-item stellwand-dino"> </div>
                    <p className="product-title">Stellwand DINO</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-muro">
                    <div className="product-item stellwand-muro-100x200"></div>
                    <p className="product-title">Stellwand MURO <br />
                        100 x 200 cm</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-muro">
                    <div className="product-item stellwand-muro-110x200"></div>
                    <p className="product-title">Stellwand MURO <br />
                        110 x 200 cm</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-muro">
                    <div className="product-item stellwand-muro-120x200"></div>
                    <p className="product-title">Stellwand MURO <br />
                        120 x 200 cm</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-muro">
                    <div className="product-item stellwand-muro-100x220"></div>
                    <p className="product-title">Stellwand MURO <br />
                        100 x 220 cm</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-muro">
                    <div className="product-item stellwand-muro-110x220"></div>
                    <p className="product-title">Stellwand MURO <br />
                        110 x 220 cm</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-muro">
                    <div className="product-item stellwand-muro-120x220"></div>
                    <p className="product-title">Stellwand MURO <br />
                        120 x 220 cm</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-pinpoint">
                    <div className="product-item stellwand-pin-point"></div>
                    <p className="product-title">Stellwand PIN POINT</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-pinpoint-xl">
                    <div className="product-item stellwand-pin-point-xl"></div>
                    <p className="product-title">Stellwand PIN POINT XL</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-quickpoint-hoch">
                    <div className="product-item stellwand-quick-point-h"></div>
                    <p className="product-title">Stellwand QUICK POINT Hochformat</p>
                </Link>

                <Link to="/anfrage/printarea-stellwand-quickpoint-hoch">
                    <div className="product-item stellwand-quick-point-q"></div>
                    <p className="product-title">Stellwand QUICK POINT Querformat</p>
                </Link>

            </div>



        </div>
    );
}

export default Products;