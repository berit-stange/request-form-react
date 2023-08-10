import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function ColorOptionsStoolSitzwuerfel() {
    return (
        <div className="products">

            <div className="progress">
                <div className='line'></div>
                <div className='button-box'>
                    <button className="button-progress active" onClick={() => { }} >1</button>
                    <button className="button-progress active" onClick={() => { }} >2</button>
                    <button className="button-progress active" onClick={() => { }} >3</button>
                    <button className="button-progress" onClick={() => { }} >4</button>
                    <button className="button-progress" onClick={() => { }} >5</button>
                    <button className="button-progress" onClick={() => { }} >6</button>
                </div>
            </div>

            <div>
                <p className="erklaerung">Wählen Sie die Farben aus. Je nach Stückzahl und Farbigkeit entscheiden wir,
                    ob mit Sieb- oder Digitaldruck produziert wird.</p>
            </div>

            <div className="product-grid">

                <Link to="/anfrage/number-of-stools">
                    <div className="product-item weiss-auf-natur"></div>
                    <p className="product-title">Weiß auf naturbraun</p>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="product-item schwarz-auf-natur"></div>
                    <p className="product-title">Schwarz auf naturbraun</p>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="product-item schwarz-farbe-auf-natur"></div>
                    <p className="product-title">2 Farben auf naturbraun</p>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="product-item komplett-farbig-sitwuerfel"></div>
                    <p className="product-title">vollfarbig</p>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="product-item farbe-auf-weiss-1"></div>
                    <p className="product-title">1 Farbe auf Weiss</p>
                </Link>

            </div>

        </div>
    );
}

export default ColorOptionsStoolSitzwuerfel;