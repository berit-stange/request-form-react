import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function ColorOptionsWall() {
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
                </div>
            </div>

            <div>
                <p className="erklaerung">Wählen Sie die Farben aus. Je nach Stückzahl und Farbigkeit entscheiden wir,
                    wie produziert wird.</p>
            </div>

            <div className="product-grid">

                <Link to="/anfrage/number-of-walls">
                    <div className="product-item weiss-auf-natur"></div>
                    <p className="product-title">Weiß auf naturbraun</p>
                </Link>

                <Link to="/anfrage/number-of-walls">
                    <div className="product-item schwarz-auf-natur"></div>
                    <p className="product-title">Schwarz auf naturbraun</p>
                </Link>

                <Link to="/anfrage/number-of-walls">
                    <div className="product-item komplett-farbig-wand-muro"></div>
                    <p className="product-title">Vollfarbig</p>
                </Link>

            </div>

        </div>
    );
}

export default ColorOptionsWall;