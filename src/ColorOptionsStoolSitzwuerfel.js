import './css/styles.css';
import './css/background-images.css';

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

                <a href="#" className="">
                    <div className="product-item weiss-auf-natur"></div>
                    <p className="product-title">Weiß auf naturbraun</p>
                </a>

                <a href="#">
                    <div className="product-item schwarz-auf-natur"></div>
                    <p className="product-title">Schwarz auf naturbraun</p>
                </a>

                <a href="#">
                    <div className="product-item schwarz-farbe-auf-natur"></div>
                    <p className="product-title">2 Farben auf naturbraun</p>
                </a>

                <a href="#">
                    <div className="product-item schwarz-farbe-auf-natur"></div>
                    <p className="product-title">komplett bunt</p>
                </a>

            </div>

        </div>
    );
}

export default ColorOptionsStoolSitzwuerfel;