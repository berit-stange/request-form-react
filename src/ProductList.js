import React from 'react';
// import { useState, useEffect, useRef } from "react";
import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';


const ProductList = () => {

    // useEffect(() => {

    // }, [

    // ]);



    return (

        <div className="product-grid">

            <h2>xxxx</h2>

            <div className="">
                <div className="search-box">
                    <input
                        type="search-input"
                        placeholder="Suche"
                        // onChange={(event) => { setSearchTerm(event.target.value); }}
                        aria-label="Suche" />
                </div>
            </div>

            <Link to="/printareastool">
                {/* <div className="product-item hocker-maks"></div> */}
                <p className="product-title">Hocker MAKS</p>
            </Link>

        </div>

    );
}

export default ProductList;