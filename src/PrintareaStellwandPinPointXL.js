import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function PrintareaStellwandPinPointXL() {
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
                    <button className="button-progress" onClick={() => { }} >6</button>
                </div>
            </div>

            <div className="product-grid">

                <Link to="/anfrage/color-options">
                    <div className="product-item stellwand-pin-point-xl-1"></div>
                    <p className="product-title">1 Seite / Mittelwand ohne Stützbeine</p>
                </Link>

                <Link to="/anfrage/color-options">
                    <div className="product-item stellwand-pin-point-xl-1-b"></div>
                    <p className="product-title">1 Seite mit Stützbeinen</p>
                </Link>

                <Link to="/anfrage/color-options">
                    <div className="product-item stellwand-pin-point-xl-2"></div>
                    <p className="product-title">2 Seiten / Mittelwand ohne Stützbeine</p>
                </Link>

                <Link to="/anfrage/color-options">
                    <div className="product-item stellwand-pin-point-xl-2-b"></div>
                    <p className="product-title">2 Seiten mit Stützbeinen</p>
                </Link>

            </div>

        </div>
    );
}

export default PrintareaStellwandPinPointXL; 