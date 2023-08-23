import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function PrintareaStellwandMuro() {
    return (
        <div className="products">

            <div className="progress">
                <div className='line'></div>
                <div className='button-box'>
                    <button className="button-progress active" onClick={() => { }} >1</button>
                    <button className="button-progress active" onClick={() => { }} >2</button>
                    <button className="button-progress" onClick={() => { }} >3</button>
                    <button className="button-progress" onClick={() => { }} >4</button>
                    <button className="button-progress" onClick={() => { }} >5</button>
                </div>
            </div>

            <div>
                <p className="erklaerung">Die Größe der Druckfläche ist der wichtigste Faktor für den Preis.</p>
            </div>

            <div className="product-grid">

                <Link to="/color-options-wall">
                    <div className="product-item stellwand-muro-1"></div>
                    <p className="product-title">1 Seite / Mittelwand</p>
                </Link>

                <Link to="/color-options-wall">
                    <div className="product-item stellwand-muro-1-b"></div>
                    <p className="product-title">1 Seite mit schmaler Seite</p>
                </Link>

                <Link to="/color-options-wall">
                    <div className="product-item stellwand-muro-2"></div>
                    <p className="product-title">2 Seiten / Mittelwand</p>
                </Link>

                <Link to="/color-options-wall">
                    <div className="product-item stellwand-muro-2-b"></div>
                    <p className="product-title">2 Seiten mit schmalen Seiten</p>
                </Link>

            </div>

        </div>
    );
}

export default PrintareaStellwandMuro; 