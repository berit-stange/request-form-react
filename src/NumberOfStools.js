import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function NumberOfStools() {
    return (
        <div className="products">

            <div className="progress">
                <div className='line'></div>
                <div className='button-box'>
                    <button className="button-progress active" onClick={() => { }} >1</button>
                    <button className="button-progress active" onClick={() => { }} >2</button>
                    <button className="button-progress active" onClick={() => { }} >3</button>
                    <button className="button-progress active" onClick={() => { }} >4</button>
                    <button className="button-progress" onClick={() => { }} >5</button>
                    <button className="button-progress" onClick={() => { }} >6</button>
                </div>
            </div>

            <div>
                <p className="erklaerung">Wählen Sie die Farben aus. Je nach Stückzahl und Produkt entscheiden wir,
                    ob mit Sieb- oder Digitaldruck produziert wird.</p>
            </div>

            <div className="number-grid">

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">50</p>
                    </div>
                </Link>

                <a className="number">
                    <p className="">75</p>
                </a>

                <a className="number">
                    <p className="">100</p>
                </a>

                <a className="number">
                    <p className="">120</p>
                </a>

                <a className="number">
                    <p className="">150</p>
                </a>

                <a className="number">
                    <p className="">200</p>
                </a>

                <a>
                    <p className="">250</p>
                </a>

                <a>
                    <p className="">300</p>
                </a>

                <a>
                    <p className="">350</p>
                </a>

                <a>
                    <p className="">400</p>
                </a>

            </div>

        </div>
    );
}

export default NumberOfStools;