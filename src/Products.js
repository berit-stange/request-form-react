import React from 'react';
import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';


function Products() {
    return (
        <div className="products">

            <div className="product-grid">

                <Link to="/printareastool">
                    <div className="product-item hocker-maks"></div>
                    <p className="product-title">Hocker MAKS</p>
                </Link>

                <Link to="/printareasitzwuerfel">
                    <div className="product-item hocker-sitzwuerfel"></div>
                    <p className="product-title">Hocker SITZWÜRFEL</p>
                </Link>

                <Link to="/printarea-barhocker">
                    <div className="product-item hocker-barhocker"> </div>
                    <p className="product-title">Hocker BARHOCKER</p>
                </Link>

                <Link to="/printarea-stellwand-dino">
                    <div className="product-item stellwand-dino"> </div>
                    <p className="product-title">Stellwand DINO</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-muro-100x200"></div>
                    <p className="product-title">Stellwand MURO 100 x 200 cm</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-muro-110x200"></div>
                    <p className="product-title">Stellwand MURO 110 x 200 cm</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-muro-120x200"></div>
                    <p className="product-title">Stellwand MURO 120 x 200 cm</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-muro-100x220"></div>
                    <p className="product-title">Stellwand MURO 100 x 220 cm</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-muro-110x220"></div>
                    <p className="product-title">Stellwand MURO 110 x 220 cm</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-muro-120x220"></div>
                    <p className="product-title">Stellwand MURO 120 x 220 cm</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-pin-point"></div>
                    <p className="product-title">Stellwand PIN POINT</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-pin-point-xl"></div>
                    <p className="product-title">Stellwand PIN POINT XL</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-quick-point-h"></div>
                    <p className="product-title">Stellwand QUICK POINT Hochformat</p>
                </Link>

                <Link to="/printareastool">
                    <div className="product-item stellwand-quick-point-q"></div>
                    <p className="product-title">Stellwand QUICK POINT Querformat</p>
                </Link>

            </div>

        </div>
    );
}

export default Products;